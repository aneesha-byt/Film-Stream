import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";

const Slider = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            params: {
              api_key: "742d5a8f6d825856e9f0e6860a185669",
            },
          }
        );
        setLatestMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let splideOptions = {
    heightRatio: 0.5,
    pagination: false,
    speed: 500,
    cover: true,
    padding: "15vw",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: "0",
      },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies: {error.message}</div>;

  return (
    <div className="movieSlider">
      {latestMovies.length > 0 ? (
        <Splide options={splideOptions}>
          {latestMovies.map((item) => (
            <SplideSlide key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="slideCaption">
                <h2>{item.title}</h2>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div>No movies available.</div>
      )}
    </div>
  );
};

export default Slider;

import React from 'react';
import "./Favourite.css";

function Favorites() {
  return (
    <>
      <h2 className="favorite-title">
        "Every time I revisit this movie, I discover something new, solidifying its place as my favorite."
      </h2>
      <br/><br/>
      <ul className="favorites-list">
        <li className="image-item">
          <img src="https://image.tmdb.org/t/p/w500//gUREuXCnJLVHsvKXDH9fgIcfM6e.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500//94sIggRUBioP19m3vJQfV3lq6Z6.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500/e5ZqqPlhKstzB4geibpZh38w7Pq.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500//lRBT73EWsiQPuqK3YS3BnBW0Zwi.jpg" alt="" />
          <img src="https://image.tmdb.org/t/p/w500//vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" alt="" />
        </li>
      </ul>
    </>
  );
}

export default Favorites;

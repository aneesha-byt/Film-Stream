import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to="/">
              <h1>Film Stream</h1>
            </Link>
            <Link to="/favorites">Favorites</Link>
          </div>
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;

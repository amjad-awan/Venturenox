import React from "react";
import "./style.scss";
const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <h1>Our Blog</h1>
      </div>
      <div className="header-right-side">
        <h1 className="right-side-heading">
          Diagnose Car Problems If You Don’t Know Much About Cars
        </h1>
        <p>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes, We provide a
          full range of front end mechanical.
        </p>
      </div>
    </div>
  );
};

export default Header;

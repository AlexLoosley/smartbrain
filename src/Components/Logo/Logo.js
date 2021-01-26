import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import LogoIcon from "./Logo.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 28 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa4  ">
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src={LogoIcon}
            alt=""
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

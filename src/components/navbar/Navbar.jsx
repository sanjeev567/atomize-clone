import "./navbar.scss";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [cross, setCross] = useState("");

  const handleCross = () => {
    cross == "" ? setCross("addCross") : setCross("");
    console.log(cross);
  };
  return (
    <div className="navbar">
      <div className="left">
        <img src={Logo} alt="eorrimg" />
      </div>
      <div className="right">
        <ul className="ulList">
          <Link to="https://google.com" className="Link">
            <li>Features</li>
          </Link>
          <Link to="https://google.com" className="Link">
            <li>Gihub</li>
          </Link>
          <Link to="https://google.com" className="Link">
            <li>For Designers</li>
          </Link>
          <Link to="https://google.com" className="Link">
            <li className="lastLi">Documentation</li>
          </Link>
        </ul>
        <div className={`cross-btn ${cross}`} onClick={handleCross}>
          <span
            className="first"
            style={
              cross == ""
                ? {
                    transform: "rotate(0)",
                    transition: "transform .3s ease-in",
                  }
                : {
                    transform: "rotate(135deg)",
                    transition: "transform .3s ease-in",
                  }
            }
          ></span>
          <span
            className="second"
            style={
              cross == ""
                ? {
                    transform: "rotate(0) ",
                    transition: "transform .3s ease-in",
                  }
                : {
                    transform: "rotate(45deg) translate(-5px, -5px)",
                    transition: "transform .3s ease-in",
                  }
            }
          ></span>
          {/* transform: rotate(-45deg) ; */}
          <ul
            className="addCrossUl"
            style={
              cross == ""
                ? {
                    display: "flex",
                    visibility: "hidden",
                    position: "absolute",

                    transform: "translateY(-125%)",
                    transition: "transform .5s ease-in",
                  }
                : {
                    display: "flex",
                    transform: "translateY(0)",
                    transition: "transform .5s ease-in",
                  }
            }
          >
            <Link to="https://google.com" className="Link">
              <li>Features</li>
            </Link>
            <Link to="https://google.com" className="Link">
              <li>Gihub</li>
            </Link>
            <Link to="https://google.com" className="Link">
              <li>For Designers</li>
            </Link>
            <Link to="https://google.com" className="Link">
              <li className="lastLi">Documentation</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

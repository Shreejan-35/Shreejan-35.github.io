import React from "react";
import "../css/sidebar.css";
import { FaHome } from "react-icons/fa";
import { BiRightArrow, BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Sidebar() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <div className="nav-link">
              <span className="link-text">Shreejan</span>
              <div className="icon">{<BiRightArrow />}</div>
            </div>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="icon" id="home-icon">
                {<FaHome />}
              </div>
              <span className="link-text">Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="icon" id="projects-icon">
                {<AiOutlineFundProjectionScreen />}
              </div>
              <span className="link-text">Projects</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="icon" id="contact-icon">
                {<BiMessageAltDetail />}
              </div>
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

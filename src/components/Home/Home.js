import React from "react";
import Typical from "react-typical";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home-container home-page">
      <div className="text-zone">
        <div className="profile-start">
          <h1>
            Hi, my name is <br />
            <span className="name">Shreejan Dolai</span>
            <br />
            <h2>
              <span className="work">I'm a </span>
             
              <Typical
                loop={Infinity}
                steps={[
                  "student",
                  1000,
                  "learner",
                  1000,
                  "coder",
                  1000,
                  "developer",
                  1000,
                ]}
              />
            </h2>
          </h1>
        </div>
      </div>
    </div>
  );
}

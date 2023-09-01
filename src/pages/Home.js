import React from "react";

export default function Home() {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="overlay">
          <div className="hero-content">
            <h1>Learn and teach at the same time</h1>
            <p>
              Are you interested in adding notes on your?
            </p>
            <div className="btns">
              <a href="/auth/login">
              <button>Click on Login Button</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

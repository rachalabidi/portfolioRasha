import React, { Component } from "react";
import "./style/me.css";

class Me extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="text-paragraph">
          <h1>Rasha Labidi</h1>
          <p>
            {" "}
            This is some text on the left side?This is some text on the left
            sideThis is some text on the left sideThis is some text on the left
            sideThis is some text on the left sideThis is some text on the left
            sideThis is some text on the left sideThis is some text on the left
            sideThis is some text on the left side
          </p>
        </div>

        <div className="loader">
          <div className="cercle-loader">
            <img
              src={require("./web-design_13191281.png")}
              alt="Static Icon 1"
              class="icon1"
            />
            <img
              src={require("./orbit_11378693.png")}
              alt="Static Icon 2"
              class="icon2"
            />
            <img
              src={require("./coding-language_2721614.png")}
              alt="Static Icon 3"
              class="icon3"
            />
            <img
              src={require("./sitemap_3395003.png")}
              alt="Static Icon 2"
              class="icon4"
            />
            <img
              src={require("./server-storage_11748373.png")}
              alt="Static Icon 3"
              class="icon5"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Me;

import React, { Component } from "react";

const mynavbar = {
  backgroundColor : "#cd0000",
  minHeight : "4rem"
}
const maintitle = {
  fontFamily : "Rowdies",
  color: "white",
  fontSize : "xx-large"
}
const mainav = {
  margin : "0px",
  padding : "0px"
}
const naveles = {
  fontFamily : "Rowdies",
  color : "white"
}
const naveles2 = {
  color : "white",
  fontSize : "larger"
}

export default class Navbar extends Component {
  render() {

    return (
      <div>
        <nav style={mainav}  className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div style={mynavbar} className="container-fluid">
            <a style={maintitle} className="navbar-brand" href="/">
              PepperChronicles
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div style={naveles} className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a style={naveles2} className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a style={naveles2} className="nav-link" href="/Science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a style={naveles2} className="nav-link" href="/Entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a style={naveles2} className="nav-link" href="/Sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a style={naveles2} className="nav-link" href="/Business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a style={naveles2} className="nav-link" href="/Technology">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

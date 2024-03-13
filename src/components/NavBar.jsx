import React, { Component } from 'react';
import './style/nav.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <div className={`navbar ${this.state.isOpen ? 'open' : ''}`}>
        <div className="coffee-bean" />
        <div className="menu-toggle" onClick={this.toggleMenu}>
          {this.state.isOpen ? (
            <div className="close-icon">&times;</div>
          ) : (
            <div className="hamburger-icon">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          )}
        </div>
        <div className="menu">
          <a href="/" className="home">HOME</a>
          <a href="/projects" className="projects">PROJECTS</a>
          <a href="/about" className="about">ABOUT</a>
          <a href="/contact" className="contact">CONTACT</a>
        </div>
      </div>
    );
  }
}

export default NavBar;

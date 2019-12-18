import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <img
          src="https://avatars0.githubusercontent.com/u/46792997?v=4"
          alt="Me"
        />
        <p>
          Hi I'm Marcio, a system analyst. Walking the edge between legacy
          systems and modern technology.
        </p>
      </div>
    );
  }
}

export default About;

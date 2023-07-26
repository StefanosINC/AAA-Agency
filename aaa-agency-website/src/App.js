import React from 'react';
import './App.css';
import video from './Video/globe1.mp4'; // Import the video file

function App() {
  // Hello WOrld
  return (
    <div className="App">
      {/* Part 1 - Header */}
      

      {/* Part 2 - Video */}
      <div className="video-container">
        <video
          width="100%"          // Set the video width to 100% of its container
          height="100%"         // Set the video height to 100% of its container
          autoPlay              // Auto-play the video
          loop                  // Set the video to loop
          muted                 // Mute the video to prevent unwanted sound
          style={{ objectFit: 'fill' }} // Adjust the video style to fill the container
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Part 3 - Hello World Text */}
      <div className="hello-world-container">
        <h1 className="hello-world-text">Hello World</h1>
      </div>
      {/* Part 4 - Navbar */}
      <div className="Nav-Bar-Section">
        <div className="nav-links">
          <a href="#about-us" className="NavBarLinks">
            About Us
          </a>
          <a href="#join-discord" className="NavBarLinks">
            Join our Discord
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
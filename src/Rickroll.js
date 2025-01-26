import React from 'react';
import ReactPlayer from 'react-player';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Rickroll = () => {
  return (
    <>
      <div>
        <div className="background-video">
          <ReactPlayer
            url='./video.mp4'
            loop
            muted
            playing
            playsinline
            autoPlay
            className="video-player"
          />
        </div>

        <div className="dot-filter"></div>

        <div className="text-overlay">
          <div className="text-container">
            <div className="mt-4">
              <button onClick={() => window.open("https://linkedin.com/in/florian-a-dev", "_blank")} className="btn btn-primary mx-2"><FaLinkedin /></button>
              <button onClick={() => window.open("https://github.com/florian-a", "_blank")} className="btn btn-primary mx-2"><FaGithub /></button>
              <a href="mailto:linkedin@florian-a.dev?subject=Rickroll&body=N'hésitez pas à m'envoyer un petit message !" className="btn btn-primary mx-2"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rickroll;

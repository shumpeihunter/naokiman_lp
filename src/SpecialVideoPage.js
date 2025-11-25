import React from 'react';
import './App.css';
import backgroundImg from './assets/background.png';
import watchNowBtnImg from './assets/watch-now-button.png';
import specialVideoOverlay from './assets/special_video.mp4';
import TypewriterText from './TypewriterText';

function SpecialVideoPage({ startAnimations = false }) {
  return (
    <div className="special-video-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <video
        className="special-video-video"
        src={specialVideoOverlay}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="special-video-overlay"></div>
      <div className="special-video-content">
        <div className="special-video-text">
          <p className="special-video-eyebrow">
            <TypewriterText text="MEMBERS ONLY" speed={40} start={startAnimations} />
          </p>
          <h1 className="special-video-title">
            <span>
              <TypewriterText text="SPECIAL VIDEOS" speed={60} start={startAnimations} />
            </span>
          </h1>
          <p className="special-video-description">
            <TypewriterText
              text="サロン限定動画コンテンツ多数配信中！"
              speed={30}
              delay={750}
              start={startAnimations}
            />
          </p>
          <button className="image-button-container special-video-btn">
            <img src={watchNowBtnImg} alt="WATCH NOW" className="watch-now-image-btn" />
          </button>
        </div>
        <div className="special-video-right-glow"></div>
      </div>
    </div>
  );
}

export default SpecialVideoPage;

import React from 'react';
import './App.css';
import backgroundImg from './assets/background.png';
import watchNowBtnImg from './assets/watch-now-button.png';
import liveVideo from './assets/LIVE配信1.mp4';
import liveVideo2 from './assets/LIVE配信2.mp4';
import liveVideo3 from './assets/LIVE配信3.mp4';
import liveStreamTitleImg from './assets/LIVESTREAM.png';
import placeholderThumb from './assets/top.jpeg';
import TypewriterText from './TypewriterText';

function LivePage({ startAnimations = false }) {
  const videoList = [
    { src: liveVideo, poster: placeholderThumb },
    { src: liveVideo2, poster: placeholderThumb },
    { src: liveVideo3, poster: placeholderThumb },
  ];

  return (
    <div className="app-container live-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="content-wrapper">
        <header className="header">
          <img src={liveStreamTitleImg} alt="LIVE STREAM" className="main-title-image" />
          <p className="sub-title">
            <TypewriterText
              text="定期的にサロン限定生配信を実施"
              speed={55}
              start={startAnimations}
            />
          </p>
        </header>

        <main className="main-content live-main">
          <div className="live-video-grid">
            {videoList.map((videoItem, index) => (
              <div
                key={`live-video-${index}`}
                className={`live-video-card ${startAnimations ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <video
                  className="live-video-element"
                  src={videoItem.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={videoItem.poster}
                />
              </div>
            ))}
          </div>

          <p className="description-text">
            <TypewriterText
              text="サロン限定の表には出せない裏話や都市伝説を見逃すな"
              speed={45}
              delay={600}
              start={startAnimations}
            />
          </p>
        </main>

        <footer className="footer">
          <a
            className="image-button-container special-video-btn"
            href="https://naokiman-netflix.vercel.app/browse"
          >
            <img src={watchNowBtnImg} alt="WATCH NOW" className="watch-now-image-btn" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default LivePage;

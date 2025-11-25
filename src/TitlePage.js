import React, { useEffect, useState } from 'react';
import './App.css';
import backgroundImg from './assets/top.png';
import joinNowImg from './assets/join now.png';

function TitlePage() {
  const [noiseVisible, setNoiseVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setNoiseVisible(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`title-page ${noiseVisible ? 'title-page-noise' : 'title-page-ready'}`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={`title-noise-layer ${noiseVisible ? 'visible' : ''}`}>
        <div className="title-noise-static" />
        <div className="title-noise-lines" />
      </div>

      <button className={`image-button-container title-page-button ${noiseVisible ? '' : 'button-ready'}`}>
        <img src={joinNowImg} alt="JOIN NOW" className="title-page-button-img" />
      </button>
    </div>
  );
}

export default TitlePage;

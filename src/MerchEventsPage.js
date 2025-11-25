import React from 'react';
import './App.css';
import backgroundImg from './assets/4.png';
import heroImg from './assets/goods.png';
import TypewriterText from './TypewriterText';

function MerchEventsPage({ startAnimations = false }) {
  return (
    <div className="merch-events-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="merch-events-overlay" />
      <div className="merch-events-content">

        <div className={`merch-events-hero ${startAnimations ? 'animate' : ''}`}>
          <img src={heroImg} alt="Merchandise and events" />
          <div className="merch-events-copy">
            <h2>オンラインサロン限定グッズ</h2>
            <p>
              Access exclusive merchandise drops, collaborative event planning, and limited experiences only
              available to the Discord community. Don't miss special releases and live sessions.
            </p>
            <button className="merch-events-btn">VIEW COLLECTION</button>
          </div>
        </div>
                <div className={`merch-events-hero ${startAnimations ? 'animate' : ''}`}>
          <img src={heroImg} alt="Merchandise and events" />
          <div className="merch-events-copy">
            <h2>イベントチケットの先行配信</h2>
            <p>
              Access exclusive merchandise drops, collaborative event planning, and limited experiences only
              available to the Discord community. Don't miss special releases and live sessions.
            </p>
            <button className="merch-events-btn">VIEW COLLECTION</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchEventsPage;

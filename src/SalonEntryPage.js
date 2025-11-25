import React from 'react';
import './App.css';
import backgroundImg from './assets/background.png';
import pricingImg from './assets/1480.png';
import subscribeImg from './assets/Subscribenow.png';
import TypewriterText from './TypewriterText';

function SalonEntryPage({ startAnimations = false }) {
  return (
    <div className="salon-entry-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="salon-entry-overlay" />
      <div className="salon-entry-content">
        <header className="salon-entry-header">
          <h1>
            <TypewriterText
              text="UNCOVER THE TRUTH. JOIN THE INNER CIRCLE."
              speed={45}
              delay={100}
              start={startAnimations}
            />
          </h1>
          <p>
            <TypewriterText
              text="Dive deep into exclusive content, live sessions, and a community of seekers. The Naokiman Online Salon is your gateway to hidden knowledge."
              speed={32}
              delay={500}
              start={startAnimations}
            />
          </p>
        </header>

        <div className={`salon-card ${startAnimations ? 'animate' : ''}`}>
          <div className="salon-card-price">
            <img src={pricingImg} alt="1,480 yen per month" />
            <span>ACCESS PREMIUM CONTENT / CANCEL ANYTIME</span>
          </div>

          <ul className="salon-card-benefits">
            <li>Weekly live streams & deep dives</li>
            <li>Members-only community & Q&amp;A</li>
            <li>Early access to events & merch drops</li>
          </ul>

          <div className="salon-card-cta">
            <img src={subscribeImg} alt="Subscribe Now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalonEntryPage;

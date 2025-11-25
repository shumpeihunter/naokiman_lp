import React from 'react';
import './App.css';
import backgroundImg from './assets/background.png';
import heroImgOne from './assets/DAO.png';
import heroImgTwo from './assets/世界救済.png';
import joinNowImg from './assets/join now.png';
import joinProjectImg from './assets/joinpj.png';
import TypewriterText from './TypewriterText';

const projectCards = [
  {
    title: 'MYSTERY RESEARCH GROUP',
    description:
      '共同研究メンバーで不可解な現象を深掘りし、リサーチ結果を共有する研究プロジェクト。',
  },
  {
    title: 'CREATIVE CONTENT LAB',
    description:
      '映像・音声・記事などのクリエイティブ制作を共同で行い、サロン限定コンテンツを制作。',
  },
  {
    title: 'COMMUNITY EVENT PLANNING',
    description:
      'オンライン/オフラインのイベント企画を持ち寄り、実行までをコミュニティでサポート。',
  },
];

function JoinDiscordPage({ startAnimations = false }) {
  return (
    <div className="join-discord-page" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="join-discord-overlay" />
      <div className="join-discord-content">
        <header className="join-discord-header">
          <h1>
            <TypewriterText
              text="NAOKIMAN PROJECTS"
              speed={45}
              delay={100}
              start={startAnimations}
            />
          </h1>
          <p>
            <TypewriterText
              text="ナオキマンが主催する多様なプロジェクトにコミュニティメンバーと一緒に今すぐ参加しよう！"
              speed={35}
              delay={500}
              start={startAnimations}
            />
          </p>
        </header>

        <div className={`join-discord-hero ${startAnimations ? 'animate' : ''}`}>
          <img src={heroImgOne} alt="Discord Hero 1" />
          <img src={heroImgTwo} alt="Discord Hero 2" />
        </div>

        <div className={`join-discord-projects ${startAnimations ? 'animate' : ''}`}>
          {projectCards.map(card => (
            <div className="project-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className={`join-discord-cta ${startAnimations ? 'animate' : ''}`}>
          <button className="join-discord-btn image-button-container">
            <img src={joinNowImg} alt="Join Discord Now" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinDiscordPage;

import React, { useEffect, useState } from 'react';
import './App.css';
import TitlePage from './TitlePage';
import SpecialVideoPage from './SpecialVideoPage';
import LivePage from './LivePage';
import JoinDiscordPage from './JoinDiscordPage';
import MerchEventsPage from './MerchEventsPage';
import SalonEntryPage from './SalonEntryPage';

const sectionOrder = ['title', 'special', 'live', 'discord', 'merch', 'salon'];

function App() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.section;
            setVisibleSections(prev =>
              prev[key] ? prev : { ...prev, [key]: true }
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = sectionOrder
      .map(id => document.querySelector(`[data-section=\"${id}\"]`))
      .filter(Boolean);

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lp-root">
      <section
        data-section="title"
        className={`lp-section ${visibleSections.title ? 'section-visible' : ''}`}
      >
        <TitlePage />
      </section>

      <section
        data-section="special"
        className={`lp-section ${visibleSections.special ? 'section-visible' : ''}`}
      >
        <SpecialVideoPage startAnimations={!!visibleSections.special} />
      </section>

      <section
        data-section="live"
        className={`lp-section ${visibleSections.live ? 'section-visible' : ''}`}
      >
        <LivePage startAnimations={!!visibleSections.live} />
      </section>

      <section
        data-section="discord"
        className={`lp-section ${visibleSections.discord ? 'section-visible' : ''}`}
      >
        <JoinDiscordPage startAnimations={!!visibleSections.discord} />
      </section>

      <section
        data-section="merch"
        className={`lp-section ${visibleSections.merch ? 'section-visible' : ''}`}
      >
        <MerchEventsPage startAnimations={!!visibleSections.merch} />
      </section>
    </div>
  );
}

export default App;

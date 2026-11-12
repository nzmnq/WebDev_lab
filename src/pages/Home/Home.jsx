import React, { useState } from 'react';
import HelicopterCard from '../../components/HelicopterCard/HelicopterCard';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import { useHelicopters } from '../../context/HelicoptersContext';
import './Home.css';

const Home = () => {
  const { helicopters } = useHelicopters();
  const [showMore, setShowMore] = useState(false);
  const [stripIndex, setStripIndex] = useState(0);

  const displayedHelicopters = showMore ? helicopters : helicopters.slice(0, 3);

  const featuredStrip = [
    { name: 'Sikorsky UH-60', img: '/images/1.jpg' },
    { name: 'Boeing CH-47', img: '/images/2.jpg' },
    { name: 'Eurocopter EC135', img: '/images/3.jpg' },
    { name: 'Bell 206 JetRanger', img: '/images/4.jpg' },
    { name: 'AgustaWestland AW101', img: '/images/5.jpg' },
    { name: 'Robinson R44', img: '/images/6.jpg' },
    { name: 'Airbus H225', img: '/images/7.jpg' },
    { name: 'Boeing AH-64 Apache', img: '/images/8.jpg' }
  ];

  const stripVisibleCount = 4;
  const maxStripIndex = Math.max(0, featuredStrip.length - stripVisibleCount);

  const handlePrevStrip = () => {
    setStripIndex((prev) => (prev > 0 ? prev - 1 : maxStripIndex));
  };

  const handleNextStrip = () => {
    setStripIndex((prev) => (prev < maxStripIndex ? prev + 1 : 0));
  };

  const visibleStripItems = featuredStrip.slice(
    stripIndex,
    stripIndex + stripVisibleCount
  );

  const handleScrollToFeatured = () => {
    const section = document.getElementById('you-may-like');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__title">
            Admire Modern Helicopters & Fleet
          </h1>
          <p className="home-hero__desc">
            Сучасний флот передових гелікоптерів та легенди авіації, включно з
            українським флагманом Ан-225 «Мрія». Обирайте надійні моделі для будь-яких завдань.
          </p>
          <div className="home-hero__actions">
            <PrimaryButton
              className="home-hero__btn"
              onClick={handleScrollToFeatured}
            >
              Show More
            </PrimaryButton>
          </div>
        </div>

        <div className="home-hero__visual">
          <img
            src="/images/mriya.jpg"
            alt="Ан-225 Мрія"
            className="home-hero__img"
          />
        </div>
      </section>

      <section className="home-categories">
        <div className="category-card category-card--large">
          <div className="category-card__badge">Popular • Tactical</div>
          <div className="category-card__body">
            <h2 className="category-card__title">
              Військова та тактична авіація
            </h2>
            <p className="category-card__models">
              Sikorsky UH-60 • Boeing AH-64 Apache
            </p>
            <p className="category-card__desc">
              Багатоцільові та ударні машини для виконання складних тактичних завдань,
              десантування та евакуації.
            </p>
          </div>
          <div className="category-card__media">
            <img src="/images/military.jpg" alt="Військова авіація" />
          </div>
        </div>

        <div className="category-column">
          <div className="category-card category-card--horizontal">
            <div className="category-card__info">
              <div className="category-card__badge">Civilian</div>
              <h3 className="category-card__title">
                Цивільні та комерційні
              </h3>
              <p className="category-card__models">
                Bell 206 JetRanger • Robinson R44
              </p>
              <p className="category-card__desc">
                Легкі та надійні вертольоти для приватних перельотів і трансферів.
              </p>
            </div>
            <div className="category-card__media category-card__media--small">
              <img src="/images/civilian.jpg" alt="Цивільні вертольоти" />
            </div>
          </div>

          <div className="category-card category-card--horizontal">
            <div className="category-card__info">
              <div className="category-card__badge">New • Rescue</div>
              <h3 className="category-card__title">
                Пошуково-рятувальні (SAR)
              </h3>
              <p className="category-card__models">
                Eurocopter EC135 • AgustaWestland AW101
              </p>
              <p className="category-card__desc">
                Всепогодні машини з медичним обладнанням для швидкої евакуації.
              </p>
            </div>
            <div className="category-card__media category-card__media--small">
              <img src="/images/rescue.jpg" alt="Рятувальні вертольоти" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-strip">
        <div className="home-strip__carousel">
          <button
            type="button"
            className="home-strip__arrow"
            onClick={handlePrevStrip}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <div className="home-strip__items">
            {visibleStripItems.map((item, idx) => (
              <div key={idx} className="home-strip__item">
                <div className="home-strip__img-box">
                  <img src={item.img} alt={item.name} />
                </div>
                <span className="home-strip__name">{item.name}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="home-strip__arrow"
            onClick={handleNextStrip}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
        <div className="home-strip__dots">
          {Array.from({ length: maxStripIndex + 1 }).map((_, idx) => (
            <span
              key={idx}
              className={`home-strip__dot ${idx === stripIndex ? 'active' : ''}`}
              onClick={() => setStripIndex(idx)}
            />
          ))}
        </div>
      </section>

      <section className="home-featured" id="you-may-like">
        <div className="home-featured__header">
          <h2 className="home-featured__title">You may like</h2>
        </div>

        <div className="home-featured__grid">
          {displayedHelicopters.map((heli) => (
            <HelicopterCard
              key={heli.id}
              helicopter={heli}
              showRemove={false}
              withLink={true}
            />
          ))}
        </div>

        {helicopters.length > 3 && (
          <div className="home-more">
            <PrimaryButton onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show less' : 'Show more'}
            </PrimaryButton>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

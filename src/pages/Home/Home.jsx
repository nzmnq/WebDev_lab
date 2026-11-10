import React, { useState } from 'react';
import HelicopterCard from '../../components/HelicopterCard/HelicopterCard';
import { INITIAL_HELICOPTERS } from '../../data/helicopters';
import './Home.css';

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const displayedHelicopters = showMore
    ? INITIAL_HELICOPTERS
    : INITIAL_HELICOPTERS.slice(0, 3);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__title">
            Admire Modern Helicopters & Fleet
          </h1>
          <p className="home-hero__desc">
            Сучасний флот передових гелікоптерів: від надійних тактичних машин до
            маневреного цивільного транспорту та всепогодних рятувальних комплексів.
          </p>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__placeholder">
            <span className="card__image-text">Banner Image</span>
          </div>
        </div>
      </section>

      <section className="home-categories">
        <div className="category-card category-card--large">
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
        </div>

        <div className="category-column">
          <div className="category-card">
            <div className="category-card__body">
              <h3 className="category-card__title">
                Цивільні та комерційні
              </h3>
              <p className="category-card__models">
                Bell 206 JetRanger • Robinson R44
              </p>
              <p className="category-card__desc">
                Легкі та надійні вертольоти для приватних перельотів, ділових трансферів
                та навчання пілотів.
              </p>
            </div>
          </div>

          <div className="category-card">
            <div className="category-card__body">
              <h3 className="category-card__title">
                Пошуково-рятувальні (SAR)
              </h3>
              <p className="category-card__models">
                Eurocopter EC135 • AgustaWestland AW101
              </p>
              <p className="category-card__desc">
                Всепогодні машини з медичним обладнанням для швидкої евакуації,
                поліцейського нагляду та морських рятувальних операцій.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="home-featured__header">
          <h2 className="home-featured__title">You may like</h2>
        </div>

        <div className="home-featured__grid">
          {displayedHelicopters.map((heli) => (
            <HelicopterCard key={heli.id} helicopter={heli} />
          ))}
        </div>

        {INITIAL_HELICOPTERS.length > 3 && (
          <div className="home-more">
            <button
              type="button"
              className="btn-show-more"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show less' : 'Show more'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

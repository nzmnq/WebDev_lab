import React from 'react';
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton';
import './Sidebar.css';

const Sidebar = ({ totalPassengers = '—', isSorted = false }) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Manage helicopters</h2>

      <div className="sidebar__sort">
        <span className="sort-label">Sort by the fastest helicopters</span>
        <div
          className={`switch-toggle ${isSorted ? 'active' : ''}`}
          id="sort-toggle"
          title="Toggle sorting"
        >
          <span className="switch-knob"></span>
        </div>
      </div>

      <hr className="sidebar__divider" />

      <div className="sidebar__count">
        <div className="sidebar__count-title">Count total passenger capacity:</div>
        <PrimaryButton id="count-btn" className="btn-count">
          Count
        </PrimaryButton>
      </div>

      <div className="sidebar__total">
        <span className="total-label">Total passengers:</span>
        <span className="total-value" id="total-value">
          {totalPassengers}
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;

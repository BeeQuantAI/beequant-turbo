import React from 'react';

const StatsSection:React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">839</span>
              <p className="stats__name">Days on the market</p>

              <span className="stats__dodger stats__dodger--left stats__dodger--purple" />
              <span className="stats__dodger stats__dodger--right stats__dodger--purple" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">12812</span>
              <p className="stats__name">Members</p>
              <span className="stats__dodger stats__dodger--left stats__dodger--orange" />
              <span className="stats__dodger stats__dodger--right stats__dodger--orange" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">1403</span>
              <p className="stats__name">Support trading pairs</p>
              <span className="stats__dodger stats__dodger--left stats__dodger--green" />
              <span className="stats__dodger stats__dodger--right stats__dodger--green" />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">over $1 bn.</span>
              <p className="stats__name">Total earned</p>
              <span className="stats__dodger stats__dodger--left stats__dodger--blue" />
              <span className="stats__dodger stats__dodger--right stats__dodger--blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
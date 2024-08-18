import React from 'react';
import { IconDatabaseDollar,IconBrandCoinbase } from '@tabler/icons-react';

const InvestmentOpportunities: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row row--relative">
          <div className="col-12 col-lg-6">
            <div className="invest">
              <h2 className="invest__title">For Investors</h2>
              <ul className="invest__list">
                <li>
                  -<b> 3 types</b> of ai trading bots with
                  <b> customizable and configurable</b> features;
                </li>
                <li>
                  -<b> Tailored</b> bots and services;
                </li>
                <li>- Other rewards and bonuses;</li>
              </ul>
              <a href="#" className="invest__link">
                More benefits
              </a>
              <span className="block-icon block-icon--orange">
                  <IconDatabaseDollar size={20} />
                </span>
              <span className="screw screw--lines-bl" />
              <span className="screw screw--lines-br" />
              <span className="screw screw--lines-tr" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="invest">
              <h2 className="invest__title">BeeQuant Token</h2>
              <div className="invest__rate-wrap">
                <div className="invest__rate">
                  <span>Current course</span>
                  <p>1 BeeQuant Coin (BQC) = $0.791</p>
                </div>
                <div className="invest__graph">
                  <img src="img/graph/graph2.svg" alt="" />
                </div>
              </div>
              <div className="invest__rate-wrap">
                <div className="invest__rate">
                  <span>Week</span>
                  <p className="green">
                    +0.19%
                    <small>[0.84]</small>
                  </p>
                </div>
                <div className="invest__graph">
                  <img src="img/graph/graph1.svg" alt="" />
                </div>
              </div>
              <a href="#" className="invest__link">
                More about token
              </a>
              <span className="block-icon block-icon--blue">
                  <IconBrandCoinbase size={20} />
                </span>
              <span className="screw screw--lines-bl" />
              <span className="screw screw--lines-br" />
              <span className="screw screw--lines-tr" />
            </div>
          </div>
          <div className="section__canvas section__canvas--first" id="canvas" />
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
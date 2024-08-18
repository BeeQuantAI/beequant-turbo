import React from 'react';
import { IconShieldDollar,Icon24Hours,IconChartHistogram } from '@tabler/icons-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="section__title">
              <h2>Our features</h2>
              <p>
                Whether you&apos;re a beginner or an experienced trader, our platform empowers you to
                make informed decisions and your trading success.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="feature">
            <h3 className="feature__title">Safety</h3>
              <p className="feature__text">
                We do not have access to your personal data and cannot withdraw funds
              </p>

              <span className="block-icon block-icon--orange">
                  <IconShieldDollar size={20}/>
                </span>
              <span className="screw screw--bl" />
              <span className="screw screw--tr" />
              <span className="screw screw--big-br" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature">
              <h3 className="feature__title">Automatization</h3>
              <p className="feature__text">Automatic trade and deal closing</p>
              <span className="block-icon block-icon--green">
                  <Icon24Hours size={20}/>
                </span>
              <span className="screw screw--bl" />
              <span className="screw screw--tr" />
              <span className="screw screw--big-br" />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature">
              <h3 className="feature__title">Analytics</h3>
              <p className="feature__text">
                The robot shows you how your trades are performing in real time
              </p>
              <span className="block-icon block-icon--blue">
                  <IconChartHistogram size={20} />
                </span>
              <span className="screw screw--bl" />
              <span className="screw screw--tr" />
              <span className="screw screw--big-br" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
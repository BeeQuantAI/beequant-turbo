import React from 'react';
import { IconGift } from '@tabler/icons-react';

const RegisterAndAboutUs: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="hero__content hero__content--first">
              <h1 className="hero__title">
                <strong>AI</strong> for trading in the crypto industry
              </h1>
              <div className="hero__btns">
                <a href="/register" className="hero__btn">
                  Register
                </a>
                <a href="#" className="hero__btn hero__btn--light">
                  About us
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="hero__content hero__content--second">
              <a href="/register" className="cta">
                <h2 className="cta__title">Registration Open For Limited Time</h2>
                <p className="cta__text">
                  Sign up and take part in our alpha test, get a chance to win
                  <b> $500 Prize!</b> <br />
                  The number of registration spots is limited.
                </p>
                <div className="progressbar">
                  <h3 className="progressbar__title">Spots:</h3>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: '75%' }}
                    >
                      <span>75</span>
                    </div>
                  </div>
                  <div className="progressbar__values">
                    <span className="progressbar__value progressbar__value--left">0</span>
                    <span className="progressbar__value progressbar__value--right">100</span>
                  </div>
                </div>
                <span className="block-icon block-icon--red">
                  <IconGift size={24} />
                </span>
                <span className="screw screw--lines-bl" />
                <span className="screw screw--lines-br" />
                <span className="screw screw--lines-tr" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RegisterAndAboutUs;
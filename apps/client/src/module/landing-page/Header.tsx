import React from 'react';
import { IconUserCircle, IconPointFilled } from '@tabler/icons-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <button className="header__btn" type="button" aria-label="Toggle navigation">
                <span />
                <span />
                <span />
              </button>
              <a href="/" className="header__logo">
                <img src="/img/logo/logo_dark.png" alt="" />
              </a>
              <span className="header__tagline">BeeQuant AI</span>
              <ul className="header__nav" id="header__nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
              </ul>
              <div className="header__language">
                <a
                  className="dropdown-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                  <IconPointFilled size={20} />
                </a>
                <ul className="dropdown-menu header__language-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Chinese</a>
                  </li>
                </ul>
              </div>
              <a href="/login" className="header__profile flex gap-1">
                <IconUserCircle size={20} />
                <span>Sign In</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
import React from 'react';
import {
  IconCurrencyBitcoin,
  IconCurrencyEthereum,
  IconCurrencyLitecoin,
  IconCurrencySolana,
  IconCurrencyDogecoin,
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandDiscord,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
            <div className="footer__logo">
              <img src="img/logo/logo_dark.png" alt="" />
            </div>
            <p className="footer__tagline">
              The BeeQuant AI team works hard
              <br />
              to deliver exceptional financial results
              <br />
              and increase our clients&apos; revenue.
            </p>
            <div className="footer__currencies">
              <IconCurrencyBitcoin size={20} />
              <IconCurrencyEthereum size={20} />
              <IconCurrencyLitecoin size={20} />
              <IconCurrencySolana size={20} />
              <IconCurrencyDogecoin size={20} />
            </div>
          </div>
          <div
            className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
            <h6 className="footer__title">Company</h6>
            <div className="footer__nav">
              <a href="#">About BeeQuant AI</a>
              <a href="#">Our news</a>
              <a href="#">License</a>
              <a href="#">Contacts</a>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
            <div className="row">
              <div className="col-12">
                <h6 className="footer__title">Services & Features</h6>
              </div>
              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Invest</a>
                  <a href="#">Token</a>
                  <a href="#">Affiliate</a>
                  <a href="#">Contest</a>
                </div>
              </div>
              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Safety</a>
                  <a href="#">Automatization</a>
                  <a href="#">Analytics</a>
                  <a href="#">Reports</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
            <h6 className="footer__title">Support</h6>
            <div className="footer__nav">
              <a href="#">Help center</a>
              <a href="#">How it works</a>
              <a href="#">Privacy policy</a>
              <a href="#">Terms & conditions</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <div className="footer__social">
                <a href="#" target="_blank">
                  <IconBrandFacebook size={20} />
                </a>
                <a href="#" target="_blank">
                  <IconBrandX size={20} />
                </a>
                <a href="#" target="_blank">
                  <IconBrandInstagram size={20} />
                </a>
                <a href="#" target="_blank">
                  <IconBrandTelegram size={20} />
                </a>
                <a href="#" target="_blank">
                  <IconBrandDiscord size={20} />
                </a>
                <a href="#" target="_blank">
                  <IconBrandLinkedin size={20} />
                </a>
              </div>
              <small className="footer__copyright">© BeeQuant AI, 2024.</small>
            </div>
          </div>
        </div>
      </div>
      <span className="screw screw--footer screw--footer-bl" />
      <span className="screw screw--footer screw--footer-br" />
      <span className="screw screw--footer screw--footer-tr" />
      <span className="screw screw--footer screw--footer-tl" />
    </footer>
  );
};

export default Footer;
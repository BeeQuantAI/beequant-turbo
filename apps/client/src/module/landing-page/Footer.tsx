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
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Landing");

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
            <div className="footer__logo">
              <img src="/img/logo/logo_dark.png" alt="" />
            </div>
            <p className="footer__tagline">
              {t("footerTagline")}
            </p>
            <div className="footer__currencies">
              <IconCurrencyBitcoin size={20} />
              <IconCurrencyEthereum size={20} />
              <IconCurrencyLitecoin size={20} />
              <IconCurrencySolana size={20} />
              <IconCurrencyDogecoin size={20} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
            <h6 className="footer__title">{t("company")}</h6>
            <div className="footer__nav">
              <a href="#">{t("aboutUs")}</a>
              <a href="#">{t("news")}</a>
              <a href="#">{t("license")}</a>
              <a href="#">{t("contacts")}</a>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
            <div className="row">
              <div className="col-12">
                <h6 className="footer__title">{t("servicesAndFeatures")}</h6>
              </div>
              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">{t("invest")}</a>
                  <a href="#">{t("token")}</a>
                  <a href="#">{t("affiliate")}</a>
                  <a href="#">{t("contest")}</a>
                </div>
              </div>
              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">{t("safety")}</a>
                  <a href="#">{t("automatization")}</a>
                  <a href="#">{t("analytics")}</a>
                  <a href="#">{t("reports")}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
            <h6 className="footer__title">{t("support")}</h6>
            <div className="footer__nav">
              <a href="#">{t("helpCenter")}</a>
              <a href="#">{t("howItWorks")}</a>
              <a href="#">{t("privacyPolicy")}</a>
              <a href="#">{t("termsConditions")}</a>
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
              <small className="footer__copyright">{t("copyright")}</small>
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
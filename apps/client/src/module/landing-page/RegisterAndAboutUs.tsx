import React from "react";
import { IconGift } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const RegisterAndAboutUs: React.FC = () => {
  const t = useTranslations("Landing");

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="hero__content hero__content--first">
              <h1 className="hero__title">
                <strong>AI</strong> {t("aiForTrading")}
              </h1>
              <div className="hero__btns">
                <a href="/register" className="hero__btn">
                  {t("register")}
                </a>
                <a href="#" className="hero__btn hero__btn--light">
                  {t("aboutUs")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="hero__content hero__content--second">
              <a href="/register" className="cta">
                <h2 className="cta__title">{t("registrationOpen")}</h2>
                <p className="cta__text">
                  {t("signUpText")}
                  <b> {t("prizeAmount")}</b> <br />
                  {t("limitedSpotsText")}
                </p>
                <div className="progressbar">
                  <h3 className="progressbar__title">{t("spots")}</h3>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label={t("progressBarAriaLabel")}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: "75%" }}
                    >
                      <span>{t("progressBarValue")}</span>
                    </div>
                  </div>
                  <div className="progressbar__values">
                    <span className="progressbar__value progressbar__value--left">
                      {t("spotsLeft")}
                    </span>
                    <span className="progressbar__value progressbar__value--right">
                      {t("spotsRight")}
                    </span>
                  </div>
                </div>
                <span className="block-icon block-icon--red">
                  <IconGift size={24} color="rgb(216,216,216)" />
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

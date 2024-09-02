import React from "react";
import {
  IconShieldDollar,
  Icon24Hours,
  IconChartHistogram,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const FeaturesSection: React.FC = () => {
  const t = useTranslations("Landing");

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="section__title">
              <h2>{t("ourFeaturesTitle")}</h2>
              <p>{t("ourFeaturesDescription")}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="feature">
              <h3 className="feature__title">{t("safetyTitle")}</h3>
              <p className="feature__text">{t("safetyDescription")}</p>
              <span className="block-icon block-icon--orange">
                <IconShieldDollar size={20} />
              </span>
              <span className="screw screw--bl" />
              <span className="screw screw--tr" />
              <span className="screw screw--big-br" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature">
              <h3 className="feature__title">{t("automatizationTitle")}</h3>
              <p className="feature__text">{t("automatizationDescription")}</p>
              <span className="block-icon block-icon--green">
                <Icon24Hours size={20} />
              </span>
              <span className="screw screw--bl" />
              <span className="screw screw--tr" />
              <span className="screw screw--big-br" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature">
              <h3 className="feature__title">{t("analyticsTitle")}</h3>
              <p className="feature__text">{t("analyticsDescription")}</p>
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

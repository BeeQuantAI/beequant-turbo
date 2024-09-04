import React from 'react';
import { IconDatabaseDollar, IconBrandCoinbase } from '@tabler/icons-react';
import { useTranslations } from "next-intl";

const InvestmentOpportunities: React.FC = () => {
  const t = useTranslations("Landing");

  return (
    <section className="section">
      <div className="container">
        <div className="row row--relative">
          <div className="col-12 col-lg-6">
            <div className="invest">
              <h2 className="invest__title">{t("investmentOpportunitiesTitle1")}</h2>
              <ul className="invest__list">
                <li>{t("investmentList.item1")}</li>
                <li>{t("investmentList.item2")}</li>
                <li>{t("investmentList.item3")}</li>
              </ul>
              <a href="#" className="invest__link">
                {t("moreBenefitsLink")}
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
              <h2 className="invest__title">{t("investmentOpportunitiesTitle2")}</h2>
              <div className="invest__rate-wrap">
                <div className="invest__rate">
                  <span>{t("currentCourse")}</span>
                  <p>{t("currentRate")}</p>
                </div>
                <div className="invest__graph">
                  <img src="/img/graph/graph2.svg" alt="" />
                </div>
              </div>
              <div className="invest__rate-wrap">
                <div className="invest__rate">
                  <span>{t("weekChange")}</span>
                  <p className="green">
                    {t("weekChangeValue")}
                    <small>{t("weekChangeDetails")}</small>
                  </p>
                </div>
                <div className="invest__graph">
                  <img src="/img/graph/graph1.svg" alt="" />
                </div>
              </div>
              <a href="#" className="invest__link">
                {t("moreAboutTokenLink")}
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
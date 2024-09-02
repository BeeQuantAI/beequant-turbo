import React from "react";
import { useTranslations } from "next-intl";

const StatsSection: React.FC = () => {
  const t = useTranslations("Landing");

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">839</span>
              <p className="stats__name">{t("daysOnTheMarket")}</p>
              <span className="stats__dodger stats__dodger--left stats__dodger--purple" />
              <span className="stats__dodger stats__dodger--right stats__dodger--purple" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">12812</span>
              <p className="stats__name">{t("members")}</p>
              <span className="stats__dodger stats__dodger--left stats__dodger--orange" />
              <span className="stats__dodger stats__dodger--right stats__dodger--orange" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">1403</span>
              <p className="stats__name">{t("supportTradingPairs")}</p>
              <span className="stats__dodger stats__dodger--left stats__dodger--green" />
              <span className="stats__dodger stats__dodger--right stats__dodger--green" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="stats">
              <span className="stats__value">{t("totalValue")}</span>
              <p className="stats__name">{t("totalEarned")}</p>
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

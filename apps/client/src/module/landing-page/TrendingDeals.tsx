import React from 'react';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { useTranslations } from "next-intl";

const TrendingDeals: React.FC = () => {
  const t = useTranslations("Landing");

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <div className="section__title">
              <h2>{t("trendingDealsTitle")}</h2>
              <p>{t("trendingDealsDescription")}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="deals">
              <div className="deals__table-wrap">
                <table className="deals__table">
                  <thead>
                  <tr>
                    <th>{t("tableHeaders.pair")}</th>
                    <th>{t("tableHeaders.exchange")}</th>
                    <th>{t("tableHeaders.date")}</th>
                    <th>{t("tableHeaders.buyingPrice")}</th>
                    <th>{t("tableHeaders.sellingPrice")}</th>
                    <th>{t("tableHeaders.dealAmount")}</th>
                    <th>{t("tableHeaders.profit")}</th>
                    <th>{t("tableHeaders.spread")}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <div className="deals__text">{t("deals.bnbUsdt")}</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/binance.png" alt="" />
                        <span className="green">Binance</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dateExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        {t("deals.buyPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        {t("deals.sellPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dealAmountExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">{t("deals.profitExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.spreadExample")}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">{t("deals.solUsdt")}</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/bitfinex.png" alt="" />
                        <span className="green">Bitfinex</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dateExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        {t("deals.buyPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        {t("deals.sellPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dealAmountExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">{t("deals.profitExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.spreadExample")}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">{t("deals.algoUsdt")}</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/bithumb.png" alt="" />
                        <span className="green">Bithumb</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dateExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        {t("deals.buyPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        {t("deals.sellPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dealAmountExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">{t("deals.profitExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.spreadExample")}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">{t("deals.bnbUsdt")}</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/coincheck.png" alt="" />
                        <span className="green">Coincheck</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dateExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        {t("deals.buyPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        {t("deals.sellPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dealAmountExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">{t("deals.profitExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.spreadExample")}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">{t("deals.maticUsdt")}</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/kucoin.png" alt="" />
                        <span className="green">Kucoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dateExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        {t("deals.buyPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        {t("deals.sellPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dealAmountExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">{t("deals.profitExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.spreadExample")}</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">{t("deals.solUsdt")}</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/upbit.png" alt="" />
                        <span className="green">Upbit</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dateExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        {t("deals.buyPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        {t("deals.sellPriceExample")}
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.dealAmountExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">{t("deals.profitExample")}</div>
                    </td>
                    <td>
                      <div className="deals__text">{t("deals.spreadExample")}</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <span className="screw screw--lines-bl" />
              <span className="screw screw--lines-br" />
              <span className="screw screw--lines-tr" />
              <span className="screw screw--lines-tl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingDeals;
import React from 'react';
import { IconCurrencyDollar } from '@tabler/icons-react';

const TrendingDeals: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <div className="section__title">
              <h2>Trending Deals</h2>
              <p>
                Browse a curated list of real-time trading deals, complete with detailed
                information about the involved cryptocurrencies and exchanges.
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="deals">
              <div className="deals__table-wrap">
                <table className="deals__table">
                  <thead>
                  <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Date</th>
                    <th>Buying price</th>
                    <th>Selling price</th>
                    <th>Deal amount</th>
                    <th>Profit</th>
                    <th>Spread</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      <div className="deals__text">BNB/USDT</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="/img/exchanges/binance.png" alt="" />
                        <span className="green">Binance</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">15.4.24 01:09</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        304.3
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        305
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">$4 259</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">+$9.80</div>
                    </td>
                    <td>
                      <div className="deals__text">0.23%</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">SOL/USDT</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="img/exchanges/bitfinex.png" alt="" />
                        <span className="green">Bitfinex</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">15.4.24 01:01</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        333.32
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        333.7
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">$8 204</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">+$9.35</div>
                    </td>
                    <td>
                      <div className="deals__text">0.11%</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">ALGO/USDT</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="img/exchanges/bithumb.png" alt="" />
                        <span className="green">Bithumb</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">15.4.24 00:57</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        0.2181
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        0.21847
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">$8 040</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">+$13.64</div>
                    </td>
                    <td>
                      <div className="deals__text">0.17%</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">BNB/USDT</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="img/exchanges/coincheck.png" alt="" />
                        <span className="green">Coincheck</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">15.4.24 00:51</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        1739.15
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        1741.32
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">$7 599</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">+$9.48</div>
                    </td>
                    <td>
                      <div className="deals__text">0.12%</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">MATIC/USDT</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="img/exchanges/kucoin.png" alt="" />
                        <span className="green">Kucoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">15.4.24 00:48</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        2.1
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        2.3
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">$999</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">+$7.24</div>
                    </td>
                    <td>
                      <div className="deals__text">0.28%</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="deals__text">SOL/USDT</div>
                    </td>
                    <td>
                      <div className="deals__exchange">
                        <img src="img/exchanges/upbit.png" alt="" />
                        <span className="green">Upbit</span>
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">15.4.24 00:42</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--buy">
                        <IconCurrencyDollar size={20} />
                        0.59
                      </div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--sell">
                        <IconCurrencyDollar size={20} />
                        0.61
                      </div>
                    </td>
                    <td>
                      <div className="deals__text">$3 524</div>
                    </td>
                    <td>
                      <div className="deals__text deals__text--green">+$12.05</div>
                    </td>
                    <td>
                      <div className="deals__text">0.18%</div>
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
export interface IntervalQueryTableType {
  text: string;
  interval: string;
  getStartTime: () => string;
  getEndTime: () => string;
}

export enum TabsInterval {
  ONEDAY = "ONEDAY",
  ONEWEEK = "ONEWEEK",
  ONEMONTH = "ONEMONTH",
  SIXMONTHS = "SIXMONTHS",
  ONEYEAR = "ONEYEAR",
  FIVEYEARS = "FIVEYEARS",
}

export const IntervalQueryTable = {
  // for 1 day interval, show the data in 1 minute intervals of past 12 hours
  ONEDAY: {
    text: "1 Day",
    interval: "1m",
    getStartTime: () =>
      new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    getEndTime: () => new Date().toISOString(), // Current time
  },
  // for 1 week interval, show the data in 1hour intervals of past 7 days
  ONEWEEK: {
    text: "1 Week",
    interval: "2h",
    getStartTime: () =>
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    getEndTime: () => new Date().toISOString(), // Current time
  },
  // for 1 month interval, show the data in 6 hour intervals of past 30 days
  ONEMONTH: {
    text: "1 Month",
    interval: "6h",
    getStartTime: () =>
      new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    getEndTime: () => new Date().toISOString(), // Current time
  },
  // for 6 months interval, show the data in 1d intervals of past 6 months
  SIXMONTHS: {
    text: "6 Months",
    interval: "1d",
    getStartTime: () =>
      new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000).toISOString(), // 6 months ago
    getEndTime: () => new Date().toISOString(), // Current time
  },
  // for 1 year interval, show the data in 1d intervals of past 1 year
  ONEYEAR: {
    text: "1 Year",
    interval: "1d",
    getStartTime: () =>
      new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year ago
    getEndTime: () => new Date().toISOString(), // Current time
  },
  // for 5 years interval, show the data in 1M intervals of past 5 years
  FIVEYEARS: {
    text: "5 Years",
    interval: "1M",
    getStartTime: () =>
      new Date(Date.now() - 5 * 365 * 24 * 60 * 60 * 1000).toISOString(), // 5 years ago
    getEndTime: () => new Date().toISOString(), // Current time
  },
};

import {createSelector} from "reselect";

const YEAR_DAYS = 365;
// Так как неизвестна дата начала кредита, возьмем среднее количество дней в месяце
const AVERAGE_MONTH_DAYS = 30.5; 

const getDeposits = (state) => {
  return state.deposits;
};

export const getMinSumm = (state) => {
  return state.minSumm;
};

export const getMinPeriod = (state) => {
  return state.minPeriod;
};

export const getDepositNames = createSelector(
  getDeposits,
  (deposits) => {
    return deposits.map(({code, name}) => ({code, name}));
  }
);

export const getType = (state) => {
  return state.type;
};

export const getDepositParams = createSelector(
  getDeposits,
  getType,
  (deposits, type) => {
    return deposits.find((deposit) => deposit.code === type.code).param;
  }
);

export const getDepositPeriods = createSelector(
  getDepositParams,
  (params) => {
    return params.map((param) => param.period_from);
  }
)

export const getSumm = (state) => {
  return state.summ;
};

export const getPeriod = (state) => {
  return state.period;
};

export const getSumsAndRates = createSelector(
  getDepositParams,
  getDepositPeriods,
  getPeriod,
  (params, periods, depositPeriod) => {
    for(let i = 0; i < periods.length; i++) {
      if (depositPeriod < periods[i]) {
        let param = params.find((item) => item.period_from === periods[i - 1]);
        return (param && param.summs_and_rate) || params[0].summs_and_rate;
      } else if (depositPeriod === periods[i]) {
        return params.find((item) => item.period_from === periods[i]).summs_and_rate;
      } else {
        continue;
      }
    }
    return params.find((item) => item.period_from === periods[periods.length - 1]).summs_and_rate;
  }
)

export const getRate = createSelector(
  getSumsAndRates,
  getSumm,
  (sumsAndRate, summ) => {
    const sumsArr = sumsAndRate.map((item) => item.summ_from);
    for(let i = 0; i < sumsArr.length; i++) {
      if (summ < sumsArr[i]) {
        let sumsAndRates = sumsAndRate.find((item) => item.summ_from === sumsArr[i - 1]);
        return (sumsAndRates && sumsAndRates.rate) || 0;
      } else if (summ === sumsArr[i]) {
        return sumsAndRate.find((item) => item.summ_from === sumsArr[i]).rate;
      } else {
        continue;
      }
    }
    return sumsAndRate.find((item) => item.summ_from === sumsArr[sumsArr.length - 1]).rate;
  }
);

export const getIncome = createSelector(
  getSumm,
  getRate,
  getPeriod, 
  (summ, rate, period) => {
    // Начисления процентов по вкладам без капитализации по простой формуле:
    // S=(P*I*t:K):100.

    // S – начисленный профит.
    // P – сумма вклада.
    // I – годовая ставка по депозиту.
    // t – срок депозита (к-во дней).
    // K – число дней в году (при расчете процентов всегда берется 365 дней, даже в високосный год).
    return Math.round((summ * rate * period * AVERAGE_MONTH_DAYS / YEAR_DAYS) / 100);
  }
)

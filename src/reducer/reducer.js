import {deposits} from "../mocks/deposits";
import {getSumsAndRates} from "./selectors";

const initialState = {
  deposits,
  type: {},
  summ: 0,
  period: 0,
  minSumm: 0,
  minPeriod: 0
};

export const ActionType = {
  CHANGE_TYPE: `CHANGE_TYPE`,
  CHANGE_SUMM: `CHANGE_SUMM`,
  CHANGE_PERIOD: `CHANGE_PERIOD`,
};

export const ActionCreator = {
  changeType: (payload) => ({
    type: ActionType.CHANGE_TYPE,
    payload
  }),
  changeSumm: (payload) => ({
    type: ActionType.CHANGE_SUMM,
    payload
  }),
  changePeriod: (payload) => ({
    type: ActionType.CHANGE_PERIOD,
    payload
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TYPE:
      const params = state.deposits.find((deposit) => deposit.code === action.payload.code).param;
      const minPeriod = params[0].period_from;
      const minSumm = getSumsAndRates({
        ...state,
        type: action.payload,
        period: state.period ? state.period : minPeriod
      })[0].summ_from;
      if (state.summ < minSumm) {
        if (state.period < minPeriod) {
          return {
            ...state,
            type: action.payload,
            summ: minSumm,
            period: minPeriod,
            minSumm: minSumm,
            minPeriod: minPeriod
          };
        } else {
          return {
            ...state,
            type: action.payload,
            summ: minSumm,
            minSumm: minSumm,
            minPeriod: minPeriod
          };
        }
      } else {
        return {
          ...state,
          type: action.payload,
          minSumm: minSumm,
          minPeriod: minPeriod
        };
      }
    case ActionType.CHANGE_SUMM:
      return {...state, summ: action.payload};
    case ActionType.CHANGE_PERIOD:
      return {...state, period: action.payload};
    default:
      return state;
  }
};

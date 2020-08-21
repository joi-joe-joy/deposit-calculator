import {reducer, ActionType, ActionCreator} from "./reducer";
import {deposits} from "../mocks/deposits";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      deposits,
      type: {},
      summ: 0,
      period: 0,
      minSumm: 0,
      minPeriod: 0
    });
  });
  it(`Reducer should change summ by a given value`, () => {
    expect(reducer({
      deposits,
      type: {code: `unic`, name: `Универсальный`},
      summ: 1000000,
      period: 1,
      minSumm: 1000000,
      minPeriod: 1
    }, {
      type: ActionType.CHANGE_SUMM,
      payload: 5000000
    })).toEqual({
      deposits,
      type: {code: `unic`, name: `Универсальный`},
      summ: 5000000,
      period: 1,
      minSumm: 1000000,
      minPeriod: 1
    });
  });
  it(`Reducer should change period by a given value`, () => {
    expect(reducer({
      deposits,
      type: {code: `unic`, name: `Универсальный`},
      summ: 1000000,
      period: 1,
      minSumm: 1000000,
      minPeriod: 1
    }, {
      type: ActionType.CHANGE_PERIOD,
      payload: 45
    })).toEqual({
      deposits,
      type: {code: `unic`, name: `Универсальный`},
      summ: 1000000,
      period: 45,
      minSumm: 1000000,
      minPeriod: 1
    });
  });
  it(`Reducer should change type by a given value, and set min summ and min period`, () => {
    expect(reducer({
      deposits,
      type: {},
      summ: 0,
      period: 0,
      minSumm: 0,
      minPeriod: 0
    }, {
      type: ActionType.CHANGE_TYPE,
      payload: {code: `unic`, name: `Универсальный`}
    })).toEqual({
      deposits,
      type: {code: `unic`, name: `Универсальный`},
      summ: 1000000,
      period: 1,
      minSumm: 1000000,
      minPeriod: 1
    });
  });
  it(`Reducer should change type by a given value, and set min summ and min period`, () => {
    expect(reducer({
      deposits,
      type: {},
      summ: 0,
      period: 92,
      minSumm: 0,
      minPeriod: 0
    }, {
      type: ActionType.CHANGE_TYPE,
      payload: {code: `unic`, name: `Универсальный`}
    })).toEqual({
      deposits,
      type: {code: `unic`, name: `Универсальный`},
      summ: 500000,
      period: 92,
      minSumm: 500000,
      minPeriod: 1
    });
  });
  it(`Reducer should change type by a given value, and set min summ and min period`, () => {
    expect(reducer({
      deposits,
      type: {},
      summ: 0,
      period: 0,
      minSumm: 0,
      minPeriod: 0
    }, {
      type: ActionType.CHANGE_TYPE,
      payload: {"code": "replenish", "name": "Пополняемый"}
    })).toEqual({
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"},
      summ: 50000000,
      period: 91,
      minSumm: 50000000,
      minPeriod: 91
    });
  });
  it(`Reducer should change type by a given value, and set min summ and min period`, () => {
    expect(reducer({
      deposits,
      type: {},
      summ: 0,
      period: 32,
      minSumm: 0,
      minPeriod: 0
    }, {
      type: ActionType.CHANGE_TYPE,
      payload: {"code": "standart", "name": "Стандартный"}
    })).toEqual({
      deposits,
      type: {"code": "standart", "name": "Стандартный"},
      summ: 500000,
      period: 32,
      minSumm: 500000,
      minPeriod: 1
    });
  });
});
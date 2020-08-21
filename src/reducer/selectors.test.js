import {deposits} from "../mocks/deposits";
import {
  getDepositNames,
  getDepositParams,
  getDepositPeriods,
  getSumsAndRates,
  getRate,
  getIncome
} from "./selectors";

it("Function getDepositNames should return array of deposit names", () => {
  const state = {
    deposits
  };
  expect(getDepositNames(state)).toEqual([
    {
      "code": "unic", 
	    "name": "Универсальный"
    },
    {
      "code": "standart", 
      "name": "Стандартный"
    },
    {
      "code": "replenish", 
      "name": "Пополняемый"
    }
  ]);
});

describe("Function getDepositParams should return correct params", () => {
  it("Should return params for Unic", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"}
    };
    expect(getDepositParams(state)).toEqual(deposits[0].param);
  });

  it("Should return params for standart", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"}
    };
    expect(getDepositParams(state)).toEqual(deposits[1].param);
  });

  it("Should return params for replenish", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"}
    };
    expect(getDepositParams(state)).toEqual(deposits[2].param);
  });
});

describe("Function getDepositPeriods should return array of periods", () => {
  it("Should return array of periods for Unic", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"}
    };
    expect(getDepositPeriods(state)).toEqual([1, 2, 7, 14, 21, 31, 91]);
  });

  it("Should return array of periods for standart", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"}
    };
    expect(getDepositPeriods(state)).toEqual([1, 2, 7, 14, 21, 31, 91]);
  });

  it("Should return array of periods for replenish", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"}
    };
    expect(getDepositPeriods(state)).toEqual([91, 121]);
  });
});

describe("Function getSumsAndRates should return summs and rate", () => {
  it("Should return summs and rate for Unic, period 1", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 1
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 1000000, 
				"rate" : 2.0
			},
			{
				"summ_from": 100000000, 
				"rate" : 2.75
			},
			{
				"summ_from": 500000000, 
				"rate" : 3.0
			}
    ]);
  });

  it("Should return summs and rate for Unic, period 15", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 15
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 1000000, 
				"rate" : 3.75
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.10
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
    ]);
  });
    
  it("Should return summs and rate for Unic, period 93", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 93
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 500000, 
				"rate" : 4.80
			},
			{
				"summ_from": 10000000, 
				"rate" : 5.05
			},
			{
				"summ_from": 50000000, 
				"rate" : 5.30
			}
		]);
  });

  it("Should return summs and rate for standart, period 14", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"},
      period: 14
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 1000000, 
				"rate" : 3.75
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.10
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
		]);
  });

  it("Should return summs and rate for standart, period 30", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"},
      period: 30
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 1000000, 
				"rate" : 4.0
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.15
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
		]);
  });

  it("Should return summs and rate for standart, period 92", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"},
      period: 92
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 500000, 
				"rate" : 4.90
			},
			{
				"summ_from": 10000000, 
				"rate" : 5.15
			},
			{
				"summ_from": 50000000, 
				"rate" : 5.40
			}
		]);
  });

  it("Should return summs and rate for replenish, period 91", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"},
      period: 91
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 50000000, 
				"rate" : 4.74
			}
		]);
  });

  it("Should return summs and rate for replenish, period 120", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"},
      period: 120
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 50000000, 
				"rate" : 4.74
			}
		]);
  });

  it("Should return summs and rate for replenish, period 200", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"},
      period: 200
    };
    expect(getSumsAndRates(state)).toEqual([
			{
				"summ_from": 50000000, 
				"rate" : 4.75
			}
		]);
  });
});

describe("Function getRate should return correct rate", () => {
  it("should return rate for Unic", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 22,
      summ: 200000000
    };
    expect(getRate(state)).toBe(4.15);
  });
  it("should return rate for Unic", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 92,
      summ: 600000
    };
    expect(getRate(state)).toBe(4.80);
  });
  it("should return rate for Unic", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 90,
      summ: 60000000
    };
    expect(getRate(state)).toBe(5.40);
  });
  it("should return rate for standart", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"},
      period: 20,
      summ: 700000000
    };
    expect(getRate(state)).toBe(4.25);
  });
  it("should return rate for standart", () => {
    const state = {
      deposits,
      type: {"code": "standart", "name": "Стандартный"},
      period: 91,
      summ: 40000000
    };
    expect(getRate(state)).toBe(5.15);
  });
  it("should return rate for replenish", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"},
      period: 91,
      summ: 600000000
    };
    expect(getRate(state)).toBe(4.74);
  });
  it("should return rate for replenish", () => {
    const state = {
      deposits,
      type: {"code": "replenish", "name": "Пополняемый"},
      period: 122,
      summ: 600000000
    };
    expect(getRate(state)).toBe(4.75);
  });
});

describe("Function getIncome should return correct income", () => {
  it("should return income for Unic", () => {
    const state = {
      deposits,
      type: {"code": "unic", "name": "Универсальный"},
      period: 1,
      summ: 1000000
    };
    expect(getIncome(state)).toBe(1671);
  });
});
const depositsJSON = { "deposits": [
	{
	"code": "unic", 
	"name": "Универсальный", 
	"param" : 
	[
		{
		"period_from": 1,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 2,
		"summs_and_rate" : 
		[
			{
				"summ_from": 1000000, 
				"rate" : 3.25
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.00
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
		]
		},
		{
		"period_from": 7,
		"summs_and_rate" : 
		[
			{
				"summ_from": 1000000, 
				"rate" : 3.50
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.05
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
		]
		},
		{
		"period_from": 14,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 21,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 31,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 91,
		"summs_and_rate" : 
		[
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
		]
		}
		
	]
	},
	{
	"code": "standart", 
	"name": "Стандартный", 
	"param" : 
	[
		{
		"period_from": 1,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 2,
		"summs_and_rate" : 
		[
			{
				"summ_from": 1000000, 
				"rate" : 3.25
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.00
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
		]
		},
		{
		"period_from": 7,
		"summs_and_rate" : 
		[
			{
				"summ_from": 1000000, 
				"rate" : 3.50
			},
			{
				"summ_from": 100000000, 
				"rate" : 4.05
			},
			{
				"summ_from": 500000000, 
				"rate" : 4.25
			}
		]
		},
		{
		"period_from": 14,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 21,
		"summs_and_rate" : 
		[
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
		]
		},
		{
		"period_from": 31,
		"summs_and_rate" : 
		[
			{
				"summ_from": 500000, 
				"rate" : 5.00
			},
			{
				"summ_from": 10000000, 
				"rate" : 5.25
			},
			{
				"summ_from": 50000000, 
				"rate" : 5.50
			}
		]
		},
		{
		"period_from": 91,
		"summs_and_rate" : 
		[
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
		]
		}
		
	]
	},
	{
	"code": "replenish", 
	"name": "Пополняемый", 
	"param" : 
	[		
		{
		"period_from": 91,
		"summs_and_rate" : 
		[
			{
				"summ_from": 50000000, 
				"rate" : 4.74
			}
		]
		},
		{
		"period_from": 121,
		"summs_and_rate" : 
		[
			{
				"summ_from": 50000000, 
				"rate" : 4.75
			}
		]
		}
		
	]
	}
]};

export const {deposits} = depositsJSON;

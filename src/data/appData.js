export const donutChartData = [
    { 'accountType': 'Savings', 'percent': 16.5 },
    { 'accountType': 'Investments', 'percent': 24 },
    { 'accountType': 'Shared', 'percent': 13 },
    { 'accountType': 'MultiCurrency', 'percent': 16.5 },
    { 'accountType': 'Other', 'percent': 10 }
];

export const barChartQ4Months = ['November', 'December', 'January'];
export const barChartMonthlyPercentages = [
    { name: 'Savings', data: [14, 16, 19.5] },
    { name: 'Investments', data: [24, 23.5, 24.5] },
    { name: 'Shared', data: [12.5, 12.5, 14] },
    { name: 'MultiCurrency', data: [16, 18, 17] },
    { name: 'Other', data: [7, 12, 11] },
];

export const gridData = [
    {
        "TransactionID": 1,
        "AccountName": "Savings",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "Amount": "18.00",
        "Action": "Deposit",
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "TransactionDate": "13-12-2019 13:10"
    },
    {
        "TransactionID": 2,
        "AccountName": "Investments",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "Amount": "-19.00",
        "Action": "Withdraw",
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        },
        "TransactionDate": "13-12-2019 9:40"
    },
    {
        "TransactionID": 3,
        "AccountName": "Shared",
        "SupplierID": 1,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 550 ml bottles",
        "Amount": "10.00",
        "Action": "Deposit",
        "UnitsOnOrder": 70,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "TransactionDate": "11-12-2019 16:13"
    },
    {
        "TransactionID": 4,
        "AccountName": "MultiCurrency",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "48 - 6 oz jars",
        "Amount": "22.00",
        "Action": "Deposit",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "TransactionDate": "10-12-2019 15:56"
    },
    {
        "TransactionID": 5,
        "AccountName": "MultiCurrency",
        "SupplierID": 2,
        "CategoryID": 2,
        "QuantityPerUnit": "36 boxes",
        "Amount": "-21.35",
        "Action": "Withdraw",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "TransactionDate": "10-12-2019 09:27"
    },
    {
        "TransactionID": 6,
        "AccountName": "Shared",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 8 oz jars",
        "Amount": "25.00",
        "Action": "Deposit",
        "UnitsOnOrder": 0,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "TransactionDate": "08-12-2019 20:14"
    },
    {
        "TransactionID": 7,
        "AccountName": "Savings",
        "SupplierID": 3,
        "CategoryID": 7,
        "QuantityPerUnit": "12 - 1 lb pkgs.",
        "Amount": "30.00",
        "Action": "Deposit",
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 7,
            "CategoryName": "Produce",
            "Description": "Dried fruit and bean curd"
        },
        "TransactionDate": "08-12-2019 16:41"
    },
    {
        "TransactionID": 8,
        "AccountName": "Other",
        "SupplierID": 3,
        "CategoryID": 2,
        "QuantityPerUnit": "12 - 12 oz jars",
        "Amount": "-40.00",
        "Action": "Withdraw",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 2,
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
        },
        "TransactionDate": "08-12-2019 08:35"
    },
    {
        "TransactionID": 9,
        "AccountName": "Savings",
        "SupplierID": 4,
        "CategoryID": 6,
        "QuantityPerUnit": "18 - 500 g pkgs.",
        "Amount": "-97.00",
        "Action": "withdraw",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": true,
        "Category": {
            "CategoryID": 6,
            "CategoryName": "Meat/Poultry",
            "Description": "Prepared meats"
        },
        "TransactionDate": "05-12-2019 17:51"
    },
    {
        "TransactionID": 10,
        "AccountName": "Other",
        "SupplierID": 4,
        "CategoryID": 8,
        "QuantityPerUnit": "12 - 200 ml jars",
        "Amount": "31.00",
        "Action": "Deposit",
        "UnitsOnOrder": 0,
        "ReorderLevel": 0,
        "Discontinued": false,
        "Category": {
            "CategoryID": 8,
            "CategoryName": "Seafood",
            "Description": "Seaweed and fish"
        },
        "TransactionDate": "04-12-2019 22:44"
    }
  ];

  export const panelBarData = {
    'teammates': [
      {
        firstName: 'Andrew',
        lastName: 'Fuller',
        position: 'Team Lead'
      }, {
        firstName: 'Nancy',
        lastName: 'Leaver',
        position: 'Sales Associate'
      }, {
        firstName: 'Robert',
        lastName: 'King',
        position: 'Business System Analyst'
      }, {
        firstName: 'Laurence',
        lastName: 'Lee',
        position: 'Accounting Manager'
      }, {
        firstName: 'Mary',
        lastName: 'Saveley',
        position: 'Sales Agent'
      }, {
        firstName: 'Hari',
        lastName: 'Kumar',
        position: 'Sales Manager'
      }
    ],
    'salesReports': [
      {
        title: 'Q1 Report',
      }, {
        title: 'Q2 Report',
      }, {
        title: 'Q3 Report',
      }, {
        title: 'Q4 Report',
      }
    ]
  }

  export const lineChart7Months = ['July', 'August', 'September', 'October', 'November', 'December', 'January'];
  export const lineChartData = [
    { name: 'Savings', data: [123, 276, 310, 212, 240, 156, 98] },
    { name: 'Investments', data: [165, 210, 287, 144, 190, 167, 212]},
    { name: 'Shared', data: [56, 140, 195, 46, 123, 78, 95]},
    { name: 'MultiCurrency/Poultry', data: [88, 190, 237, 148, 156, 108, 99] },
    { name: 'Other', data: [78, 112, 211, 156, 266, 312, 289] },
];
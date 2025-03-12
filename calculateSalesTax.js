const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

const calculateSalesTax = function (salesData, taxRates) {
  let companySalesTaxResult = {}
  
  for (const company of salesData) {
    const sales = company.sales;
    const province = company.province;
    const companyName = company.name;
    let totalTaxes = 0;
    let totalSales = 0;

    // go through each value of each sales array and find their totals
    sales.forEach((sale) => {
      totalTaxes += sale * taxRates[province];
      totalSales += sale;
    });

    // create object it if it doesn't exit
    if (!companySalesTaxResult[companyName]) {
      companySalesTaxResult[companyName] = {
        totalSales: 0,
        totalTaxes: 0,
      };
    }
    // update the totals in the results object
    companySalesTaxResult[companyName].totalSales += totalSales;
    companySalesTaxResult[companyName].totalTaxes += totalTaxes;
  }
  
  return companySalesTaxResult;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

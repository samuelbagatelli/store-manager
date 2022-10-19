const newSale = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 5 },
];

const saleCreateResponse = {
  id: 3,
  itemsSold: [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 5 },
  ]
};

const expectedDate = { id: 3, date: 'now' };

const expectedIdResult = [
  { id: 1 },
  { id: 2 },
];

const expectedAllSales = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 5,
    date: "2022-10-18 22:14:23"
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 10,
    date: "2022-10-18 22:14:23"
  },
  {
    sale_id: 2,
    product_id: 3,
    quantity: 15,
    date: "2022-10-18 22:14:23"
  }
];

const expectedSale = {
  sale_id: 1,
  product_id: 1,
  quantity: 5,
  date: "2022-10-18 22:14:23"
};

module.exports = {
  newSale,
  saleCreateResponse,
  expectedDate,
  expectedIdResult,
  expectedAllSales,
  expectedSale,
};
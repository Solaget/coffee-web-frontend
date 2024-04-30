const arr = [
  {
    availbleSize: [
      { size: "500g", price: 20 },
      { size: "1kg", price: 40 },
    ],
  },

  {
    availbleSize: [
      { size: "1kg", price: 40 },
      { size: "2kg", price: 130 },
      { size: "2kg", price: 80 },
      { size: "2kg", price: 10 },
    ],
  },
];

// This function used to get min and max price of our single product;
arr.map(itm => {
    const price = itm.availbleSize.map(x => x.price)
    const minPrice = Math.min(...price);
    const maxPrice = Math.max(...price);
    console.log(`$${minPrice} - $${maxPrice}`);
})
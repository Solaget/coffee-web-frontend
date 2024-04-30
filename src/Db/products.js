const products = [
  {
    category: "coffee",
    title: "French Roast",
    id: 123456,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 21 },
      { size: "600g", price: 30 },
      { size: "700g", price: 40 },
      { size: "800g", price: 50 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 5,
    img_Src: "../../public/images/products/product-five.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },

  {
    category: "coffee",
    title: "Colombia Dark Roast",
    id: 123457,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 39 },
      { size: "1000g", price: 90 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-eleven.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "Swiss Water Decaf",
    id: 1234520,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 20 },
      { size: "1000g", price: 70 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-four.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "Breakfast Blend",
    id: 123458,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 15 },
      { size: "1000g", price: 40 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-nine.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "Holiday Blend",
    id: 123459,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 60 },
      { size: "1000g", price: 90 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-six.jpg",

    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: " House Blend",
    id: 1234510,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 42 },
      { size: "1000g", price: 84 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-ten.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "Decaffeinato",
    id: 1234511,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 79 },
      { size: "1000g", price: 158 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-three.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "Double Espresso",
    id: 1234512,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 26 },
      { size: "1000g", price: 50 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-tweelve.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "Cold Brew",
    id: 1234513,
    desc: "100% single-origin dark roast Colombian espresso. No artiﬁcial ﬂavors and no preservatives.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 30 },
      { size: "1000g", price: 60 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-two.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: " Coffee mug",
    id: 1234514,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 20 },
      { size: "1000g", price: 39 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-eight.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "French Roast",
    id: 1234515,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 14 },
      { size: "1000g", price: 28 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-one.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
  {
    category: "coffee",
    title: "French Roast",
    id: 1234516,
    desc: "An organic certified blend of coffees with a delicate cream and a floral aroma. Essence of cherry and macadamia for a rich, creamy espresso.",
    notes: "Earthy – Chocolate – Blackberry – Cherry",
    available_size: [
      { size: "500g", price: 60 },
      { size: "1000g", price: 110 },
    ],
    available_roast: ["Whole bean", "Mild Roast", "Dark Roast"],
    Cart_Limit: 10,
    img_Src: "../../public/images/products/product-eleven.jpg",
    additonal_information: {
      size: [500, 800],
      Roast: "Whole Bean, Mild Roast, Dark Roast",
      HARVEST: "October – December",
      COUNTRY: "Ethiopian",
      REGION: " Halo Beriti Woreda, Gedeb District",
      ALTITUDE: "1800-2200 meters",
    },
  },
];

export default products;
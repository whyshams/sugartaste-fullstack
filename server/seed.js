// server/seed.js
const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect("mongoDB connection string");

const demoProducts = [
  {
    name: "Embrace Sideboard",
    subtitle: "Modern Storage Solution",
    price: 268.35,
    description:
      "A sleek and stylish sideboard perfect for any modern living space. With ample storage and a contemporary design, it complements any décor.",
    benefits: [
      "Durable leather is easily cleanable so you can keep your look fresh.",
      "Water-repellent finish and internal membrane help keep your feet dry.",
      "Toe piece with star pattern adds durability.",
      "Synthetic insulation helps keep you warm.",
    ],
    details: [
      "Not intended for use as Personal Protective Equipment (PPE).",
      "Water-repellent finish and internal membrane help keep your feet dry.",
      "Lunarlon midsole delivers ultra-plush responsiveness.",
    ],
    moreDetails: [
      "Not intended for use as Personal Protective Equipment (PPE).",
      "Water-repellent finish and internal membrane help keep your feet dry.",
      "Toe piece with star pattern adds durability.",
      "Synthetic insulation helps keep you warm.",
      "A sleek and stylish sideboard perfect for any modern living space.",
    ],
    colors: ["#C9C9A3", "#B2DFDB", "#D1C4E9", "#A1887F"],
    sizes: ["Small", "Medium", "Large", "Extra Large"],
    thumbnails: [
      "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://dvf83rt16ac4w.cloudfront.net/upload/media/1721901564464609.jpeg",
    ],
  },
  {
    name: "Harmony Bookshelf",
    subtitle: "Elegant Storage for Your Books",
    price: 199.99,
    description:
      "The Harmony Bookshelf provides a perfect blend of form and function, with adjustable shelves and a refined aesthetic.",
    benefits: [
      "Adjustable shelves for flexible storage.",
      "Sturdy construction with a refined finish.",
      "Compact design suitable for any room.",
      "Easy to assemble with included instructions.",
    ],
    details: [
      'Dimensions: 60" H x 24" W x 12" D',
      "Material: Engineered wood with a laminate finish.",
      "Weight capacity: 50 lbs per shelf.",
    ],
    colors: ["#795548", "#607D8B", "#FFEB3B"],
    sizes: ["Standard"],
    imageUrl:
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    thumbnails: [
      "https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://www.seoclerk.com/pics/407226-2eWiCl1471372939.jpg",
    ],
  },
];

Product.insertMany(demoProducts)
  .then(() => {
    console.log("Demo data successfully seeded!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error seeding demo data: ", err);
    mongoose.connection.close();
  });

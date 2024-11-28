const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/ecom')
.then(()=>{console.log("DB Conneted!!!")})
.catch((err)=>{console.log(err);})


const products = [
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-2-1.jpg",
      name: "URBAN ELEGANCE",
      color: "Gray",
      selling_price: 899,
      price: 2499,
      discount: "64%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-3-2.jpg",
      name: "CLASSIC CHARM",
      color: "White",
      selling_price: 1199,
      price: 3299,
      discount: "64%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-4-1.jpg",
      name: "SPORTY VIBE",
      color: "Olive",
      selling_price: 799,
      price: 1999,
      discount: "60%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-5-1.jpg",
      name: "CASUAL COMFORT",
      color: "Green",
      selling_price: 699,
      price: 1499,
      discount: "53%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-6-1.jpg",
      name: "EXECUTIVE STYLE",
      color: "Black",
      selling_price: 1299,
      price: 2999,
      discount: "57%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-1-1.jpg",
      name: "URBAN EXPLORER",
      color: "Red",
      selling_price: 1099,
      price: 2199,
      discount: "50%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-8-1.jpg",
      name: "FORMAL EDGE",
      color: "Black",
      selling_price: 1499,
      price: 3299,
      discount: "54%"
    },
    {
      category: "Men",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-2-1.jpg",
      name: "ATHLETIC SPIRIT",
      color: "White",
      selling_price: 899,
      price: 1999,
      discount: "55%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25985726/2023/11/22/0ec2a742-3102-4963-bf27-aa5e983b10321700639910753DRESSARBlueFloralFitFlareDress1.jpg",
      name: "SPARKLING STAR",
      color: "Red",
      selling_price: 599,
      price: 1299,
      discount: "54%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16697006/2022/1/5/4672c4bf-8fe1-4523-91f4-ac08301573251641392147135KALINIWomenMaroonWovenDesign1.jpg",
      name: "FLORAL FANTASY",
      color: "Olive",
      selling_price: 699,
      price: 1499,
      discount: "53%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18969034/2022/7/4/9f433358-e001-432b-aa2f-5400075dc0e81656957693012LehengaCholi1.jpg",
      name: "CUTE AND COMFY",
      color: "Black",
      selling_price: 799,
      price: 1999,
      discount: "60%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20498352/2022/10/22/3424a72e-8518-4853-aa99-e48a0e1205841666419466834KALINIWomenPistaGreenStraightKurtawithTrouserDupatta1.jpg",
      name: "SPARKLING STAR",
      color: "Olive",
      selling_price: 899,
      price: 2499,
      discount: "64%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23770720/2023/7/5/2b16926f-e626-410f-a74d-72e1968185db1688561455843-HERENOW-Women-Dupatta-1211688561455517-3.jpg",
      name: "SUNNY SMILES",
      color: "Red",
      selling_price: 749,
      price: 1799,
      discount: "58%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21817328/2023/2/2/5230e83a-97dd-4b3a-8b70-3f2b14345b271675348806754LehengaCholi1.jpg",
      name: "TWIRLY TREAT",
      color: "Green",
      selling_price: 1199,
      price: 2299,
      discount: "48%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17932828/2022/4/19/f0d9f625-1607-4f50-8ab3-b67def6879771650366503600SLSilkLandWomenBlueSarees1.jpg",
      name: "GARDEN PARTY",
      color: "Gray",
      selling_price: 999,
      price: 2199,
      discount: "55%"
    },
    {
      category: "Women",
      image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21787816/2023/1/31/4f9ab2b8-30f2-4689-81c6-8aa913a7c4021675183061781LehengaCholi1.jpg",
      name: "DREAMY DRESS",
      color: "Black",
      selling_price: 1299,
      price: 2999,
      discount: "57%"
    },
    {
      category: "Electronics",
      image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/51-1.png",
      name: "SMARTPHONE X",
      color: "White",
      selling_price: 2999,
      price: 3999,
      discount: "25%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/3.jpg",
      name: "ULTRA HD SMART TV",
      color: "Gray",
      selling_price: 4499,
      price: 5999,
      discount: "25%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/20.jpg",
      name: "HEADPHONES",
      color: "Olive",
      selling_price: 3999,
      price: 5999,
      discount: "33%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/29.jpg",
      name: "LAPTOP PRO 2023",
      color: "Gray",
      selling_price: 4999,
      price: 6999,
      discount: "28%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/15.jpg",
      name: "WIRELESS CHARGING PAD",
      color: "Red",
      selling_price: 1499,
      price: 2499,
      discount: "40%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/22.jpg",
      name: "4K ACTION CAMERA",
      color: "Black",
      selling_price: 3499,
      price: 4999,
      discount: "30%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/28.jpg",
      name: "GAMING CONSOLE ULTIMATE",
      color: "Gray",
      selling_price: 3499,
      price: 4599,
      discount: "30%"
    },
    {
      category: "Electronics",
      image: "http://themes.pixelstrap.com/bigboost/assets/images/electronics/pro/31.jpg",
      name: "SMART WATCH PRO",
      color: "Black",
      selling_price: 6999,
      price: 9999,
      discount: "30%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-9.jpg",
      name: "CITY WALKER",
      color: "Olive",
      selling_price: 1299,
      price: 2499,
      discount: "48%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg",
      name: "RUNNING RUSH",
      color: "White",
      selling_price: 1499,
      price: 2999,
      discount: "50%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-2.jpg",
      name: "HIKE MASTER",
      color: "Red",
      selling_price: 1799,
      price: 3499,
      discount: "49%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg",
      name: "ATHLETIC ADVENTURE",
      color: "Green",
      selling_price: 1599,
      price: 2999,
      discount: "47%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-9.jpg",
      name: "FASHION FORWARD",
      color: "Olive",
      selling_price: 1399,
      price: 2699,
      discount: "48%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-2.jpg",
      name: "SNEAKER STYLE",
      color: "Red",
      selling_price: 1199,
      price: 2299,
      discount: "48%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/thumbnail-9.jpg",
      name: "FORMAL FLAIR",
      color: "Gray",
      selling_price: 1899,
      price: 3499,
      discount: "46%"
    },
    {
      category: "Shoes",
      image: "https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/shop/product-7-1.jpg",
      name: "CASUAL CHIC",
      color: "Olive",
      selling_price: 1299,
      price: 2499,
      discount: "48%"
    }
  ];
  

// Now, price and selling_price in each product are of type number
console.log(products);



Product.insertMany(products)
.then(()=>{
    console.log('Product Seeded');
})



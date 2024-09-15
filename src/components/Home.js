import React from "react";
import "./Home.css";
import Product from "./Product";
import ImageSlider from "./ImageSlider";
import ProductList from "./ProductList";
function Home({ addToBasket }) {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Makeup_PCnim._CB563483819_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/GW/BAU/Sept/clockPC._CB563570265_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/urec/hero/Under1499_Tallhero_3000x1200._CB568928188_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
  ];

  const appliancesProducts = [
    {
      id: "appliance-12321341",
      title: "Godrej 1 Ton 3 Star, 5-In-1 Convertible Cooling, Inverter Split AC",
      price: "₹29,790",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/514j-RPeWyL._SL1500_.jpg",
    },
    {
      id: "appliance-49538094",
      title: "Haier 602L, 3-Star, 100% Convertible Fridge Space, Expert Inverter Refrigerator",
      price: "₹63,490",
      rating: 4,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    },
    {
      id: "appliance-4903850",
      title: "Samsung 28 L, Convection Microwave Oven with Curd Making (MC28A5013AK/TL, Black, 10 Yr warranty)",
      price: "₹12,590",
      rating: 4,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
    },
    {
      id: "appliance-23445930",
      title: "Bosch 7 kg 5 Star Fully-Automatic Front Loading Washing Machine (WAJ2416SIN, Silver, AI active water plus, In-Built Heater)",
      price: "₹29,490",
      rating: 5,
      image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
    },
    {
      id: "appliance-4832759",
      title: "Bosch Dishwasher SMS66GI01I (13 Place Settings, Silver Inox)",
      price: "₹45,600",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61vH0gpEqIL._AC_UL320_.jpg",
    },
    {
      id: "appliance-4832760",
      title: "Faber 60 Cm 1200 M3/Hr, Autoclean Chimney | Filterless | 8Yr On Motor, 2Yr Comprehensive Warranty | Italian Design",
      price: "₹11,150",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51UNWtvV4nL._SL1500_.jpg",
    },
    {
      id: "appliance-4832761",
      title: "Samsung 6.5 kg, 5 star, Semi-Automatic Top Load Washing Machine (WT65R2200LL/TL, Air Turbo Drying, LIGHT GRAY)",
      price: "₹9,690",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71xoqUmj6yL._SL1500_.jpg",
    },
    {
      id: "appliance-4832762",
      title: "Voltas 1.5 Ton 3 Star, Fixed Speed Window AC (Copper, Turbo Mode, 2023 Model, 183 Vectra Pearl, White)",
      price: "₹31,056",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61hrzDc3aTL._SL1500_.jpg",
    },
  ];
  

  const homeDecorProducts = [
    {
      id: "home-decor-23487234",
      title: "Layers 100% Cotton Comforter for Double Bed Queen Size, 140 TC",
      price: "₹2,199",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71qCPC5iYcL._SL1000_.jpg",
    },
    {
      id: "home-decor-3948584",
      title: "Roseate Mosaic Super Soft (40x60 cm) Microfibre Bath Mat Super Absorbent",
      price: "₹338",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/81Zee0f1HNL._SL1500_.jpg",
    },
    {
      id: "home-decor-6589345",
      title: "The Purple Tree Cute Cloud Moon Star Cot Cushion with Crown (Pack of 3, 16x16 inch, Velvet)",
      price: "₹596",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/31OU14i0PqL.jpg",
    },
    {
      id: "home-decor-98457493",
      title: "Wipro 12.5W B22D Wi-Fi Smart LED Bulb with Music Sync | Voice Control with Alexa, Google Asst",
      price: "₹699",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71WLIU1EuBS._SL1500_.jpg",
    },
    {
      id: "home-decor-4832759",
      title: "RANDOM Photo Frame For Wall Set of 10 3D Collage photo frames with COFFEE TIME Plaque For Home Decoration",
      price: "₹934",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71d2A9Pd7ML._SL1500_.jpg",
    },
    {
      id: "home-decor-4832760",
      title: "Seiko Decorative Vertical Analog Pendulum Chime Sound Brown Wooden Musical Roman Numbers Home Decor Wall Clock",
      price: "₹30,000",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71ntBRnyaaL._SL1500_.jpg",
    },
    {
      id: "home-decor-4832761",
      title: "Desidiya 12 Stars 138 Led Curtain String Lights Window Curtain Lights with 8 Flashing Modes Decoration for Christmas, Wedding, Party",
      price: "₹439",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51M-0OzscIL.jpg",
    },
    {
      id: "home-decor-4832762",
      title: "Xtore® Home Décor Lucky Deer Family Matte Finish Ceramic Figures",
      price: "₹939",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51YFKk8f9zL._SL1500_.jpg",
    },
  ];
  

  const headphoneProducts = [
    {
      id: "984574934",
      title: "boAt Airdopes 141",
      price: "₹1,299",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71RFdy6y6LL._SL1500_.jpg",
    },
    {
      id: "23445930",
      title: "Boult Audio UFO",
      price: "₹1,499",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71aBAPCVc8L._SL1500_.jpg",
    },
    {
      id: "68457394",
      title: "OnePlus Nord Buds 2r",
      price: "₹1,999",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51raakZN9fL._SL1500_.jpg",
    },
    {
      id: "5748593",
      title: "Boult Audio W20",
      price: "₹1,099",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/710dy4BFjLL._SL1500_.jpg",
    },
    {
      id: "23875984",
      title: "Sony WH-1000XM4",
      price: "₹22,983",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/6162Umyop-L._SL1500_.jpg",
    },
    {
      id: "75849375",
      title: "Apple AirPods Pro",
      price: "₹24,900",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg",
    },
    {
      id: "84759384",
      title: "JBL Wave Flex",
      price: "₹2,598",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/41pwcoHZl1L._SL1000_.jpg",
    },
    {
      id: "39485095",
      title: "Skullcandy Dime 3",
      price: "₹2,998",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61-vuUvjV0L._SL1500_.jpg",
    },
    {
      id: "23754894",
      title: "Marshall Minor III",
      price: "₹9,999",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71coMXf8VlL._SL1500_.jpg",
    },
    {
      id: "84573945",
      title: "Sennheiser HD 350BT",
      price: "₹6,990",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51Hc3nBW1SL._SL1280_.jpg",
    },
    {
      id: "39485093",
      title: "Jabra Elite 4",
      price: "₹6,999",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/51HP7GfLsSL._SL1400_.jpg",
    },
    {
      id: "39485094",
      title: "Bose QuietComfort ultra",
      price: "₹25,900",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51DOzlkiBTL._SL1500_.jpg",
    },
  ];

  const amazonBrandProducts = [
    {
      id: "39485093",
      title: "Silicone Basting Brush",
      price: "₹199",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/31+ltiX8RjL.jpg",
    },
    {
      id: "9578492",
      title: "Artificial Plants",
      price: "₹279",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/81IAjM-lhTL._SL1500_.jpg",
    },
    {
      id: "39485094",
      title: "Digital Alarm Clock",
      price: "₹299",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/51lVNdShcCL._SL1100_.jpg",
    },
    {
      id: "39485095",
      title: "Slim Fit Casual Pants",
      price: "₹1,899",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71nvyIapqYL._SX569_.jpg",
    },
    {
      id: "39485096",
      title: "Jam & Honey Dinosaur Plush Toy",
      price: "₹225",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61+96XgXVVL._SL1500_.jpg",
    },
    {
      id: "39485097",
      title: "Mechanical Toy Car",
      price: "₹299",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61xxC7QqYrL._SL1000_.jpg",
    },
    {
      id: "39485098",
      title: "Multi Angle Desktop Stand",
      price: "₹129",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61JsqY7bVdL._SL1500_.jpg",
    },
    {
      id: "39485099",
      title: "USB-C Hub Dock",
      price: "₹1,199",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61Q+pBh+4sL._SL1500_.jpg",
    },
    {
      id: "49585934",
      title: "Vedaka Foxnuts",
      price: "₹385",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/81LQPjqkeTL._SL1500_.jpg",
    },
    {
      id: "98437594",
      title: "Solimo Modular Drawer",
      price: "₹977",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71PnqV7e3OL._SL1500_.jpg",
    },
    {
      id: "39485093",
      title: "Amazon Brand - Solimo Microfibre Comforter",
      price: "₹989",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71x6sccNoFL._SL1500_.jpg",
    },
    {
      id: "39485094",
      title: "Solimo Liquid Handwash",
      price: "₹140",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61bjrgIyhJL._SL1500_.jpg",
    },
    
  ];

  return (
    <div className="home">
      <div className="home__container">
        <ImageSlider images={images} />

        <div className="home__twoSectionsOverlay">
          <div className="home__twoSectionsContainer">
            <ProductList title="Appliances for your home | Up to 55% off" products={appliancesProducts} />
            <ProductList title="Revamp your home in style" products={homeDecorProducts} />
          </div>
        </div>

        <div className="home__twoTopicsRow">
          <ProductList title="Starting ₹149 | Headphones" products={headphoneProducts} />
          <ProductList title="Starting ₹99 | Amazon Brands & more" products={amazonBrandProducts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
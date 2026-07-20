import bus1 from "../src/images/bus1.png"
import bus2 from "../src/images/bus2.png"
import bus3 from "../src/images/bus3.png"
import bus4 from "../src/images/bus4.png"
import bus5 from "../src/images/bus5.png"
import bus6 from "../src/images/bus6.png"


const vehicle = [
  {
    id: 1,
    type: "Coaster",
    amenities: [
      "AC",
      "18 seats"
    ],
    // images: [
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    // ],
    thumbnail: bus1,
    seats: 30,
    description: "Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure. Stay connected, entertained, and make the most of your journey with the ultimate luxury vehicle designed for the modern traveler",
    price: 200000
  },
    {
    id: 2,
    type: "Long Bus",
    amenities: [
      "AC",
      "Wifi"
    ],
    images: [
      "/images/coaster-img/",
      "/images/coaster-img/",
      "/images/coaster-img/",
    ],
    thumbnail: bus2,
    seats: 70,
    description: "Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure. Stay connected, entertained, and make the most of your journey with the ultimate luxury vehicle designed for the modern traveler",
    price: 150000
  },
    {
    id: 3,
    type: "Coaster",
    amenities: [
      "AC",
      "Charger",
      "30 seats",
    ],
    // images: [
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    // ],
    thumbnail: bus3,
    description: "Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure. Stay connected, entertained, and make the most of your journey with the ultimate luxury vehicle designed for the modern traveler",
    price: 80000
  },
    {
    id: 4,
    type: "Coaster",
    amenities: [
      "AC",
      "Charger",
      "30 seats"
    ],
    // images: [
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    // ],
    thumbnail: bus4,
    seats: 30,
    description: "Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure. Stay connected, entertained, and make the most of your journey with the ultimate luxury vehicle designed for the modern traveler",
    price: 200000
  },
    {
    id: 5,
    type: "Coaster",
    amenities: [
      "AC",
      "20 seats"
    ],
    // images: [
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    // ],
    thumbnail: bus5,
    seats: 30,
    description: "Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure. Stay connected, entertained, and make the most of your journey with the ultimate luxury vehicle designed for the modern traveler"
  },
    {
    id: 6,
    type: "Coaster",
    amenities: [
      "AC",
      "40 seats"
    ],
    // images: [
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    //   "/images/coaster-img/",
    // ],
    thumbnail: bus6,
    seats: 30,
    description: "Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure. Stay connected, entertained, and make the most of your journey with the ultimate luxury vehicle designed for the modern traveler",
    price: 200000
  }
]

export default vehicle
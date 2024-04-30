import LocationOnePosterImg from "../../public/Images/Location/locationimg-1.jpg";
import LocationTwoPosterImg from "../../public/Images/Location/locationimg-2.jpg";
import LocationThreePosterImg from "../../public/Images/Location/locationimg-3.jpg";
import LocationFourPosterImg from "../../public/Images/Location/locationimg-4.jpeg";

const LocationData = [
  {
    id: 1001,
    address: {
      mainAddress: "Adiss Ababa",
      city: 'A,A',
      subCity: 'Bole',
      country: "Ethiopia",
      street: "Bole edna mole",
    },
    shopName: 'Ethio Coffee',
    poBox: "Et 10012",
    phoneNumber: "+251911867911",
    img_src: { poster: LocationThreePosterImg },
    menu: [],
    detail: [],
    openingDays: [
      "Monday",
      "Tuseday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    openingHour: "2pm - 4pm",
  },
  {
    id: 1002,
    address: {
      mainAddress: "Hawassa",
      city: 'Durame',
      subCity: 'Kuriftu',
      country: "Ethiopia",
      street: "Bole edna mole",
    },
    shopName: 'Tona coffee',
    poBox: "Et 10012",
    phoneNumber: "+251911867911",
    img_src: { poster: LocationTwoPosterImg },
    menu: [],
    detail: [],
    openingDays: [
      "Monday",
      "Tuseday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    openingHour: "2pm - 4pm",
  },

  {
    id: 1003,
    address: {
      city: 'Adigrat',
      subCity: 'Korem',
      mainAddress: "Tigray",
      country: "Ethiopia",
      street: "Bole edna mole",
    },
    shopName: 'Mr, coffee',
    poBox: "Et 10012",
    phoneNumber: "+251911867911",
    img_src: { poster: LocationOnePosterImg },
    menu: [],
    detail: [],
    openingDays: [
      "Monday",
      "Tuseday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    openingHour: "2pm - 4pm",
  },

];

export default LocationData;

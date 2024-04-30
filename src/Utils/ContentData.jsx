import React, { useEffect } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHeartLight, PiLeafLight } from "react-icons/pi";
import { TfiHelp } from "react-icons/tfi";
import AOS from "aos";

const ContentData = [
  {
    img: <LiaShippingFastSolid />,
    title: "Shipped FREE and to your Door",
    desc: "with orders above $35+",
    dataAosDuration: 100,
  },
  {
    img: <PiHeartLight />,
    title: "Carefully delivered within pre days",
    desc: "and packaged with love.",
    dataAosDuration: 200,
  },
  {
    img: <PiLeafLight />,
    title: "From Seed to Cup",
    desc: " An exceptional coffee experience starts with only the best ingredients",
    dataAosDuration: 300,
  },
  {
    img: <TfiHelp />,
    title: "We would love to help you",
    desc: "+251908912554",
    dataAosDuration: 400,
  },
];


export default ContentData;
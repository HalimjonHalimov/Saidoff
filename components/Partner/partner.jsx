import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { Title } from "..";
import { partners } from "../../utils/data";

const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]; // Sample data array
export default function Partner() {
  return (
    <Fade cascade>
      <div className="w-full h-auto py-8 text-center bg-black text-white">
        <div className="container mx-auto">
          <Title title="Клиенты" />
          <div className="w-full h-20 flex items-center justify-center my-8">
            <Marquee direction="left">
              {partners.map((item, index) => (
                <div key={index} className="mx-8">
                  <Image src={item.img} alt={item} className="object-cover" />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="w-full h-20 flex items-center justify-center my-8">
            <Marquee direction="right">
              {partners.map((item, index) => (
                <div key={index} className="mx-8">
                  <Image src={item.img} alt={item} className="object-cover" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </Fade>
  );
}

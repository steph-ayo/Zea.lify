"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  const images = [
    "/images/model2.png",
    "/images/model8.png",
    "/images/model5.png",
    "/images/model7.png",
    "/images/model1.png",
    "/images/model3.png",
    "/images/model4.png",
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="rounded-md px-2 md:p-10">
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
              <Image
                priority
                src={src}
                alt={`model-${index}`}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;

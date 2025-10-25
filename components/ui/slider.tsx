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

  return (
    <div>
      <Slider {...settings}>
        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model2.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      object-contain"
          />
        </div>

        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model8.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      object-contain"
          />
        </div>

        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model5.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      object-contain"
          />
        </div>

        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model7.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      "
          />
        </div>

        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model1.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      "
          />
        </div>

        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model3.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      "
          />
        </div>

        <div className="rounded-md px-2 md:p-10">
          <Image
            priority
            src="/images/model4.png"
            alt="logo"
            width={400}
            height={300}
            className="
                  rounded-2xl 
                      "
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;

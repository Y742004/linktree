"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Image } from "@heroui/react";

export default function HeadSlide() {
  return (
    <>
      <div className="">
        <Content />
      </div>
    </>
  );
}

function Content() {
  const progressCircle: any = useRef(null);
  const progressContent: any = useRef(null);
  const onAutoplayTimeLeft: any = (
    s: number,
    time: number,
    progress: number
  ) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {[1, 2].map(() => (
          <SwiperSlide>
            <SlideItemContent />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

function SlideItemContent() {
  return (
    <>
      <div className="bg-[#171717] w-full rounded-2xl overflow-hidden">
        <div className="flex text-left relative">
          <div className="mb-5 p-5 z-40">
            <div className="text-white">
              <h1 className="text-3xl font-bold">Digital Asset</h1>
              <h1 className="text-lg lg:text-2xl font-bold text-gray-300 mt-3">
                Learn Crypto
              </h1>
              <h1 className="text-lg lg:text-xl font-bold text-gray-300">
                in your Bright Future
              </h1>
            </div>

            {/* <Button className="mt-3 z-50 text-black" color="primary">
              Read More
            </Button> */}
          </div>

          <div className="absolute top-0 -right-36">
            <Image
              height={350}
              className="w-full ml-auto h-36"
              src="https://assets.staticimg.com/reaper-image/66f670d82593f600018498ab_MicrosoftTeams-image.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

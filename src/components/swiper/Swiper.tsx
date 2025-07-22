"use client";

import { Box, Image } from "@chakra-ui/react";
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css"; // Custom styles

type Slide = {
  id: number | string;
  image: string;
  alt?: string;
};

type Props = {
  slides: Slide[];
  direction?: "horizontal" | "vertical";
  aspectRatio?: number; // 16 / 9, etc.
  options?: SwiperOptions;
};

export const Swiper = ({
  slides,
  direction = "horizontal",
  aspectRatio = 16 / 9,
  options = {},
}: Props) => {
  const defaultOptions: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    direction,
    ...options,
  };

  return (
    <Box position="relative" w="full" h="full">
      <SwiperCore {...defaultOptions}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              position="relative"
              width="100%"
              paddingTop={`${100 / aspectRatio}%`}
              overflow="hidden"
            >
              <Image
                src={slide.image}
                alt={slide.alt || "Slide"}
                objectFit="cover"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
              />
            </Box>
          </SwiperSlide>
        ))}
      </SwiperCore>
    </Box>
  );
};

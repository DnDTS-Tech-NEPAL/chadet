"use client";

import { Box } from "@chakra-ui/react";
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css"; // Custom styles
import { ReactNode } from "react";

type Props = {
  slides: ReactNode[]; // ✅ Accept custom JSX slides
  direction?: "horizontal" | "vertical";
  aspectRatio?: number;
  options?: SwiperOptions;
};

export const Swiper = ({
  slides,
  direction = "horizontal",
  options = {},
}: Props) => {
  const defaultOptions: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: false,
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </SwiperCore>
    </Box>
  );
};

// "use client";

// import { useRouter } from "next/navigation";
// import {
//   Box,
//   HStack,
//   VStack,
//   Button,
//   Text,
//   Heading,
// } from "@chakra-ui/react";

// import type { HeroSectionProps } from "@/types";
// import { useWindowSize} from "@/hooks/app";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { useConfigQuery } from "@/hooks/api";
// import { useSliderImages } from "@/hooks/app/home/heroSection";
// import { Swiper } from "@/components";

// export const HeroSection = ({ initialData }: HeroSectionProps) => {
//   const router = useRouter();
//   const { width } = useWindowSize();

//   const { data: config } = useConfigQuery();

//   const { hero_type: heroType = "default", content } = config;
//   const slides = useSliderImages();

//   const getResponsiveHeight = () => {
//     if (!width) return "70vh";
//     if (width < 480) return "60vh";
//     if (width < 768) return "65vh";
//     if (width < 1024) return "75vh";
//     return "85vh";
//   };

//   const commonSwiperProps = {
//     slides,
//     direction: "horizontal",
//     aspectRatio: heroType === "Half Image" ? 2 / 1 : 16 / 9,
//   };

//   const fullImageBoxProps = {
//     position: "relative",
//     width: "100%",
//     height: getResponsiveHeight(),
//     minHeight: heroType === "Full Image/Content" ? "400px" : "300px",
//     overflow: "hidden",
//   };

//   if (["Full Image", "Full Image/Content", "Half Image"].includes(heroType)) {
//     return (
//       <Box
//         {...(heroType === "Half Image"
//           ? {
//               position: "relative",
//               width: "100%",
//               height: { base: "auto", md: "70vh" },
//               minHeight: { base: "600px", md: "500px" },
//               maxHeight: { lg: "800px" },
//               overflow: "hidden",
//             }
//           : fullImageBoxProps)}
//       >
//         <Swiper {...commonSwiperProps} />
//       </Box>
//     );
//   }

//   const hero = content?.[0];

//   return (
//     <Box
//       position="relative"
//       px={{ base: 4, md: 8, lg: 12 }}
//       py={{ base: 8, md: 12 }}
//       backgroundColor="primary.500"
//     >
//       <HStack
//         flexDirection={{ base: "column", lg: "row" }}
//         alignItems="stretch"
//         justifyContent="space-between"
//         gap={{ base: 6, lg: 0 }}
//         mx="auto"
//         maxWidth="1280px"
//         height={{ base: "auto", lg: "70vh" }}
//         minHeight={{ base: "auto", lg: "850px" }}
//       >
//         <VStack
//           justifyContent="center"
//           alignItems="flex-start"
//           width={{ base: "full", lg: "50%" }}
//           px={{ base: 0, lg: 4 }}
//           order={{ base: 2, lg: 1 }}
//         >
//           <VStack alignItems="flex-start" gap={{ base: 4, lg: 6 }}>
//             <Heading
//               as="h1"
//               fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
//               lineHeight="1.2"
//             >
//               {hero?.hero_title}
//             </Heading>
//             <Text
//               fontSize={{ base: "md", md: "lg", lg: "xl" }}
//               color="primary.300"
//             >
//               {hero?.hero_description}
//             </Text>
//             <Button
//             //   onClick={() => router.push(ROUTES.APP.PRODUCTS)}
//               size={{ base: "md", md: "lg" }}
//               borderRadius="full"
//               variant="solid"
//             >
//               Explore Now <FaArrowRightLong />
//             </Button>
//           </VStack>
//         </VStack>

//         <Box
//           width={{ base: "full", lg: "50%" }}
//           height={{ base: "300px", sm: "350px", md: "400px", lg: "full" }}
//           minHeight={{ lg: "500px" }}
//           position="relative"
//           overflow="hidden"
//           borderRadius={{ base: "md", lg: "xl" }}
//           order={{ base: 1, lg: 2 }}
//         >
//           <Swiper {...commonSwiperProps} />
//         </Box>
//       </HStack>
//     </Box>
//   );
// };
"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  HStack,
  VStack,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

import type { HeroSectionProps } from "@/types";
import { useWindowSize } from "@/hooks/app";
import { useConfigQuery } from "@/hooks/api";
import { useSliderImages } from "@/hooks/app/home/heroSection";
import { Swiper } from "@/components";

export const HeroSection = ({ initialData }: HeroSectionProps) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const { data: config } = useConfigQuery();

  const { hero_type: heroType = "default", content } = config || {};
  const slides = useSliderImages(); // ✅ no type annotation

  const getResponsiveHeight = () => {
    if (!width) return "70vh";
    if (width < 480) return "60vh";
    if (width < 768) return "65vh";
    if (width < 1024) return "75vh";
    return "85vh";
  };

  const commonSwiperProps = {
    slides,
    direction: "horizontal" as const,
    aspectRatio: heroType === "Half Image" ? 2 / 1 : 16 / 9,
  };

  const fullImageBoxProps = {
    position: "relative" as const,
    width: "100%",
    height: getResponsiveHeight(),
    minHeight: heroType === "Full Image/Content" ? "400px" : "300px",
    overflow: "hidden" as const,
  };

  if (["Full Image", "Full Image/Content", "Half Image"].includes(heroType || "")) {
    return (
      <Box
        {...(heroType === "Half Image"
          ? {
              position: "relative" as const,
              width: "100%",
              height: { base: "auto", md: "70vh" },
              minHeight: { base: "600px", md: "500px" },
              maxHeight: { lg: "800px" },
              overflow: "hidden" as const,
            }
          : fullImageBoxProps)}
      >
        <Swiper {...commonSwiperProps} />
      </Box>
    );
  }

  const hero = content?.[0];

  return (
    <Box
      position="relative"
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
      backgroundColor="primary.500"
    >
      <HStack
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="stretch"
        justifyContent="space-between"
        gap={{ base: 6, lg: 0 }}
        mx="auto"
        maxWidth="1280px"
        height={{ base: "auto", lg: "70vh" }}
        minHeight={{ base: "auto", lg: "850px" }}
      >
        <VStack
          justifyContent="center"
          alignItems="flex-start"
          width={{ base: "full", lg: "50%" }}
          px={{ base: 0, lg: 4 }}
          order={{ base: 2, lg: 1 }}
        >
          <VStack alignItems="flex-start" gap={{ base: 4, lg: 6 }}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
              lineHeight="1.2"
            >
              {hero?.hero_title}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              color="primary.300"
            >
              {hero?.hero_description}
            </Text>
            <Button
              // onClick={() => router.push(ROUTES.APP.PRODUCTS)}
              size={{ base: "md", md: "lg" }}
              borderRadius="full"
              variant="solid"
            >
              Explore Now <FaArrowRightLong />
            </Button>
          </VStack>
        </VStack>

        <Box
          width={{ base: "full", lg: "50%" }}
          height={{ base: "300px", sm: "350px", md: "400px", lg: "full" }}
          minHeight={{ lg: "500px" }}
          position="relative"
          overflow="hidden"
          borderRadius={{ base: "md", lg: "xl" }}
          order={{ base: 1, lg: 2 }}
        >
          <Swiper {...commonSwiperProps} />
        </Box>
      </HStack>
    </Box>
  );
};

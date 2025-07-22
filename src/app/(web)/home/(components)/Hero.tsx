"use client";

import { useRouter } from "next/navigation";
import { Box, HStack, VStack, Button, Text, Heading } from "@chakra-ui/react";

// import { ROUTES } from "@/constants";

import { FaArrowRightLong } from "react-icons/fa6";
import { useWindowSize } from "@/hooks/app";
import { Swiper } from "@/components";

// Dummy static content
// const staticHeroType = "default"; 

const staticSlides = [
  { id: 1, image: "/images/slide1.jpg", alt: "Slide 1" },
  { id: 2, image: "/images/slide2.jpg", alt: "Slide 2" },
];

const staticContent = {
  hero_title: "Welcome to Our Store",
  hero_description: "Discover the best deals on your favorite products.",
};

export const HeroSection = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const getResponsiveHeight = () => {
    if (!width) return "70vh";
    if (width < 480) return "60vh";
    if (width < 768) return "65vh";
    if (width < 1024) return "75vh";
    return "85vh";
  };

//   if (staticHeroType === "Full Image") {
//     return (
//       <Box position="relative" width="100%" height={getResponsiveHeight()} minHeight="300px" overflow="hidden">
//         <Swiper slides={staticSlides} direction="horizontal" aspectRatio={16 / 9} />
//       </Box>
//     );
//   }

//   if (staticHeroType === "Full Image/Content") {
//     return (
//       <Box position="relative" width="100%" height={getResponsiveHeight()} minHeight="400px" overflow="hidden">
//         <Swiper slides={staticSlides} direction="horizontal" aspectRatio={16 / 9} />
//       </Box>
//     );
//   }

//   if (staticHeroType === "Half Image") {
//     return (
//       <Box
//         position="relative"
//         width="100%"
//         height={{ base: "auto", md: "70vh" }}
//         minHeight={{ base: "600px", md: "500px" }}
//         maxHeight={{ lg: "800px" }}
//         overflow="hidden"
//       >
//         <Swiper slides={staticSlides} direction="horizontal" aspectRatio={2 / 1} />
//       </Box>
//     );
//   }

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
              {staticContent.hero_title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} color="primary.300">
              {staticContent.hero_description}
            </Text>
            <Button
            //   onClick={() => router.push(ROUTES.APP.PRODUCTS)}
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
          <Swiper slides={staticSlides} direction="horizontal" aspectRatio={16 / 9} />
        </Box>
      </HStack>
    </Box>
  );
};

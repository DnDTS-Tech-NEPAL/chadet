"use client";

import { useConfigQuery, useHomePageQuery } from "@/hooks/api";
import Image from "next/image";
import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactNode } from "react";
import { HomePageType } from "@/types/app/home";

export const useSliderImages = () => {
  const { data: config } = useConfigQuery();
  const { data: homeData } = useHomePageQuery();

  const heroType = homeData?.hero_type;
  const heroContent = homeData?.content || [];

  const mapHeroItemToSlideData = (item: any) => ({
    imageUrl:
      item.hero_image_link ||
      item.hero_image ||
      config?.company_details_url ||
      "",
    redirectUrl: item.hero_image_redirect_link || "#",
    title: item.hero_title,
    titleColor: item.hero_title_color,
    description: item.hero_description,
    descriptionColor: item.hero_description_color,
    tagline: item.hero_tagline,
    taglineColor: item.hero_tagline_color,
    alignContent: item.align_content,
    backgroundColor: item.background_color,
    button1: {
      label: item.button_1_label,
      color: item.button_1_color,
      textColor: item.button_1_text_color,
      redirect: item.button_1_redirect_link || "#",
    },
    button2: {
      label: item.button_2_label,
      color: item.button_2_color,
      textColor: item.button_2_text_color,
      redirect: item.button_2_redirect_link || "#",
    },
  });

  const fallbackImages = (Object.keys(homeData || {}) as (keyof HomePageType)[])
    .filter(
      (key) =>
        key.startsWith("main_img") &&
        key.endsWith("_url") &&
        typeof homeData?.[key] === "string" &&
        homeData[key]?.trim() !== ""
    )
    .map((key) => {
      const imageUrl = String(homeData?.[key] || config?.company_details_url || "");
      const redirectKey = key.replace("_url", "_redirect") as keyof HomePageType;
      const redirectUrl = String(homeData?.[redirectKey] || "#");
      return mapHeroItemToSlideData({
        hero_image_link: imageUrl,
        hero_image_redirect_link: redirectUrl,
        button_1_label: "Shop Now",
        button_1_color: "#3182CE",
        button_1_text_color: "white",
        button_2_label: "Learn More",
        button_2_color: "#E2E8F0",
        button_2_text_color: "black",
      });
    });

  const slideData = heroContent.length > 0
    ? heroContent.map(mapHeroItemToSlideData)
    : fallbackImages;

  const handleButtonClick = (url: string) => {
    if (url && url !== "#") window.location.href = url;
  };

  const renderButtons = (btn1: any, btn2: any) => (
    <HStack gap={4} flexWrap="wrap">
      {[btn1, btn2].map((btn, i) =>
        btn.label ? (
          <Button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              handleButtonClick(btn.redirect);
            }}
            bg={btn.color}
            color={btn.textColor}
            _hover={{ opacity: 0.9 }}
            size={{ base: "md", md: "lg" }}
            rounded="full"
          >
            {btn.label} <FaArrowRightLong />
          </Button>
        ) : null
      )}
    </HStack>
  );

  const slides: ReactNode[] = slideData.map((item, index) => {
    const {
      imageUrl,
      redirectUrl,
      title,
      titleColor,
      description,
      descriptionColor,
      tagline,
      taglineColor,
      alignContent,
      backgroundColor,
      button1,
      button2,
    } = item;

    const imageElement = (
      <Image
        src={imageUrl || "/placeholder.svg?height=600&width=1200"}
        alt={`Banner ${index + 1}`}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    );

    if (heroType === "Full Image") {
      return (
        <Box
          key={index}
          width="100%"
          height="100%"
          position="relative"
          cursor="pointer"
          onClick={() => handleButtonClick(redirectUrl)}
        >
          {imageElement}
        </Box>
      );
    }

    if (heroType === "Half Image") {
      return (
        <Box
          key={index}
          width="100%"
          height="100%"
          display="flex"
          flexDirection={{
            base: "column",
            lg: alignContent === "Right" ? "row" : "row-reverse",
          }}
        >
          <Box
            width={{ base: "100%", lg: "50%" }}
            height={{ base: "300px", md: "400px", lg: "100%" }}
            position="relative"
            cursor="pointer"
            onClick={() => handleButtonClick(redirectUrl)}
          >
            {imageElement}
          </Box>

          <Box
            width={{ base: "100%", lg: "50%" }}
            height={{ base: "59%", lg: "100%" }}
            bg={backgroundColor}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            p={{ base: 4, md: 6, lg: 8 }}
          >
            {tagline && <Text fontSize="md" color={taglineColor} mb={2}>{tagline}</Text>}
            {title && <Heading as="h1" fontSize="4xl" color={titleColor} mb={4}>{title}</Heading>}
            {description && <Text fontSize="xl" color={descriptionColor} mb={6}>{description}</Text>}
            {renderButtons(button1, button2)}
          </Box>
        </Box>
      );
    }

    if (heroType === "Full Image/Content") {
      return (
        <Box
          key={index}
          width="100%"
          height="100%"
          position="relative"
          cursor="pointer"
          onClick={() => handleButtonClick(redirectUrl)}
        >
          {imageElement}
          <Box position="absolute" inset="0" bg="blackAlpha.400" zIndex={1} />
          <Box
            position="absolute"
            inset="0"
            display="flex"
            alignItems="center"
            justifyContent={{
              base: "center",
              lg: alignContent === "Right" ? "flex-end" : "flex-start",
            }}
            p={{ base: 4, md: 8, lg: 12 }}
            zIndex={2}
          >
            <Box
              maxWidth={{ base: "100%", sm: "90%", md: "80%", lg: "50%" }}
              textAlign={{
                base: "center",
                lg: alignContent === "Right" ? "right" : "left",
              }}
            >
              {tagline && <Text fontSize="lg" color={taglineColor} mb={4}>{tagline}</Text>}
              {title && <Heading fontSize="5xl" color={titleColor} mb={4}>{title}</Heading>}
              {description && <Text fontSize="xl" color={descriptionColor} mb={8}>{description}</Text>}
              {renderButtons(button1, button2)}
            </Box>
          </Box>
        </Box>
      );
    }

    return (
      <Box
        key={index}
        width="100%"
        height="100%"
        position="relative"
        cursor="pointer"
        onClick={() => handleButtonClick(redirectUrl)}
      >
        {imageElement}
      </Box>
    );
  });

  return slides;
};

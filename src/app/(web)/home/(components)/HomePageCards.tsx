"use client";

import { Box, Text, VStack, Icon } from "@chakra-ui/react";
import { useConfigQuery } from "@/hooks/api";
import { CardIcon1, CardIcon2, CardIcon3, CardIcon4 } from "@/assets/svg";
import { Swiper } from "@/components";

const iconList = [CardIcon1, CardIcon2, CardIcon3, CardIcon4];

export const HomepageCards = () => {
  const { data, isLoading } = useConfigQuery();

  if (isLoading || !data?.homepage_cards) return null;

  const cards = data.homepage_cards.slice(0, iconList.length);

  const extendedCards = [...cards, cards[0]];
  const extendedIcons = [...iconList, iconList[0]];

  const slides = extendedCards.map((card, index) => {
    const IconComponent = extendedIcons[index];
    const isEdge = index === 0 || index === extendedCards.length - 1;

    return (
      <Box
        key={index}
        w="180px"
        flexShrink={0}
        opacity={isEdge ? 0.4 : 1}
        transition="opacity 0.3s"
      >
        <VStack gapX={8} gapY={2} align="center">
          <Icon as={IconComponent} boxSize={8} color="gray.600" />
          <Text fontSize="sm" textAlign="center" color="gray.600">
            {card.card_label}
          </Text>
        </VStack>
      </Box>
    );
  });

  return (
    <Box bg="background.body">
      <Box maxW={"6xl"} mx={"auto"} pt={20} pb={14}>
        <Swiper
          slides={slides}
          options={{
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            freeMode: true,
          }}
        />
      </Box>
    </Box>
  );
};

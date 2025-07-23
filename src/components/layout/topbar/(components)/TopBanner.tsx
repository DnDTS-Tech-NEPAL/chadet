import { Box, Text } from "@chakra-ui/react";

export const TopBanner = () => {
  return (
    <Box bg="brand.500" py={2.5} textAlign="center">
      <Text fontSize="xs" color="white">
        <b>FREE $76 GIFT </b> ON ALL ORDERS $80 +AUD
      </Text>
    </Box>
  );
};

import { Box, Flex, Text } from "@chakra-ui/react";

const navItems = ["Shop", "Lipstick", "Eyeliner", "About Us", "Contact"];

export const NavBar = () => {
  return (
    <Box bg="#FFFAE2" px={6} py={6}>
      <Flex gap={8} justify="center">
        {navItems.map((item) => (
          <Text
            key={item}
            fontSize="md"
            color="#4E4934"
            fontWeight="medium"
            cursor="pointer"
          >
            {item}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

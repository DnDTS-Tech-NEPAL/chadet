import { Box, Flex, IconButton, Image, Spacer } from "@chakra-ui/react";
import { Facebook, Instagram, Twitter, Search, ShoppingCart, Heart, User } from "lucide-react";

export const TopNav = () => {
  return (
    <Box bg="#FFFAE2" px={6} py={4} borderBottom="1px solid #ccc">
      <Flex align="center">
        {/* Left Social Icons */}
        <Flex gap={4}>
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <IconButton
              key={i}
              variant="ghost"
              aria-label="Social"
              color="#4E4934"
              _hover={{ bg: "transparent", opacity: 0.7 }}
            > <Icon size={18} /></IconButton>
          ))}
        </Flex>

        <Spacer />

        {/* Logo */}
        <Image src="/logo.svg" alt="CHADET" h="24px" />

        <Spacer />

        {/* Right Action Icons */}
        <Flex gap={4}>
          {[Search, ShoppingCart, Heart, User].map((Icon, i) => (
            <IconButton
              key={i}
              variant="ghost"
              aria-label="Action"
              color="#4E4934"
              _hover={{ bg: "transparent", opacity: 0.7 }}
            ><Icon size={18}/> </IconButton>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};


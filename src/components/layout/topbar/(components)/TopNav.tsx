import {
  CartIcon,
  FacebookIcon,
  InstagramIcon,
  SearchIcon,
  TwitterIcon,
  UserIcon,
  WishlistIcon,
} from "@/assets/svg";
import { useConfigQuery } from "@/hooks/api";
import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const TopNav = () => {
  const { data: config } = useConfigQuery();
  const logo = config?.url;
  const logoWidth = config?.width;
  const logoHeight = config?.height;

  const socialLinks = [
    { href: config?.facebook || "https://facebook.com", Icon: FacebookIcon },
    { href: config?.instagram || "https://instagram.com", Icon: InstagramIcon },
    { href: config?.twitter || "https://twitter.com", Icon: TwitterIcon },
  ];

  return (
    <Box bg="#FFFAE2" px={6} py={4} borderBottom="1px solid #ccc">
      <Flex align="center">
        {/* Left Social Icons */}
        <Flex gap={4}>
          {socialLinks.map(({ href, Icon }, i) => (
            <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
              <IconButton
                as="span"
                variant="ghost"
                aria-label="Social"
                color="#4E4934"
                _hover={{ bg: "transparent", opacity: 0.7 }}
              >
                <Icon size={18} />
              </IconButton>
            </Link>
          ))}
        </Flex>

        <Spacer />

        {/* Logo */}
        {logo && (
          <Image
            src={logo}
            alt="CHADET"
            width={logoWidth}
            height={logoHeight}
            priority
          />
        )}

        <Spacer />

        {/* Right Action Icons */}
        <Flex gap={4}>
          {[SearchIcon, CartIcon, WishlistIcon, UserIcon].map((Icon, i) => (
            <IconButton
              key={i}
              variant="ghost"
              aria-label="Action"
              color="#4E4934"
              _hover={{ bg: "transparent", opacity: 0.7 }}
            >
              <Icon size={18} />
            </IconButton>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

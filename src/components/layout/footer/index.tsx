import {
  ArrowRight,
  CallIcon,
  FooterFacebook,
  FooterInstagram,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  YoutubeIcon,
} from "@/assets/svg"
import { useConfigQuery } from "@/hooks/api"
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Text,
  VStack,
  HStack,
  Input,
  Separator,
  InputGroup,

} from "@chakra-ui/react"

export const Footer = () => {
  const { data: config } = useConfigQuery()

  return (
    <Box bg="background.body" color="gray.800" pt={10} pb={6} px={{ base: 4, md: 16 }}>
      {/* Top Social Icons with Divider */}
      <Box mb={12} >

            <Flex align="center" gap={4}>
    {/* Icons */}
    <HStack gap={4}>
      {[LinkedinIcon, YoutubeIcon, FooterFacebook, FooterInstagram].map((IconComp, i) => (
        <IconButton
          key={i}
          aria-label="Social Icon"
          variant="ghost"
          size="md"
          _hover={{ bg: "transparent", opacity: 0.7 }}
          color="text.primary"
        >
          <Icon as={IconComp} boxSize={8} />
        </IconButton>
      ))}
    </HStack>

    {/* Horizontal line to the right of icons */}
    <Box flex="1">
      <Separator borderColor="text.primary" />
    </Box>
  </Flex>

      </Box>

      {/* Main Grid */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr 1fr" }} gap={12} mb={12}>
        {/* Left - Logo + Description */}
        <GridItem>
          <Text fontSize="2xl" fontWeight="bold" letterSpacing="wider" color="gray.800" mb={4}>
            CHADET
          </Text>
          <Text fontSize="sm" color="gray.700" lineHeight="relaxed">
           {config?.footer_description}
          </Text>
        </GridItem>

        {/* Center - Stay Connected */}
        <GridItem>
          <Text fontSize="4xl" fontWeight="normal" color="gray.800" mb={12}>
            Stay Connected
          </Text>
          <Text fontSize="md" color="gray.700" mb={8} maxW="md">
            Get insights, updates, and success stories delivered to your inbox.
          </Text>

          <InputGroup endElement={<ArrowRight aria-label="Subscribe" size="sm" />}>
            <Input variant={"flushed"}
              placeholder="E-mail"
              borderColor="gray.400"
              _focus={{ borderColor: "gray.600" }}
              _placeholder={{ color: "gray.500" }}
              fontSize="sm"
            />
          </InputGroup>

        </GridItem>

        {/* Right - Navigation Links */}
        <GridItem>
          <Flex justify="space-between" gap={8}>
            <VStack align="start" gap={3}>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                About Us
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Benefits
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Our Process
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Testimonials
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                FAQs
              </Text>
            </VStack>

            <VStack align="start" gap={3}>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Help Center
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Pricing
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Privacy Policy
              </Text>
              <Text fontSize="sm" color="gray.700" _hover={{ color: "gray.900" }} cursor="pointer">
                Terms & Conditions
              </Text>
            </VStack>
          </Flex>
        </GridItem>
      </Grid>

      {/* Bottom Section with Divider */}
      <Box>
        <Separator borderColor="text.primary" mb={6} />
        <Flex
          justify="space-between"
          flexWrap="wrap"
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          gap={4}
        >
          <Text fontSize="sm" color="gray.700">
            ©2025 chadet.com All Rights Reserved.
          </Text>

          <Flex flexWrap="wrap" gap={6} fontSize="sm" color="gray.700">
            <HStack gap={2}>
              <Icon as={LocationIcon} boxSize={5} />
              <Text>Ktm, Nepal</Text>
            </HStack>
            <HStack gap={2}>
              <Icon as={MailIcon} boxSize={5} />
              <Text>chadetinfo@gmail.com</Text>
            </HStack>
            <HStack gap={2}>
              <Icon as={CallIcon} boxSize={5} />
              <Text>01-4004789</Text>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}



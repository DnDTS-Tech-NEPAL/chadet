// import {
//   Box,
//   Flex,
//   Grid,
//   GridItem,
//   Icon,
//   IconButton,
//   Text,
//   VStack,
//   HStack,
//   Image,
// } from "@chakra-ui/react";
// import {
//   Facebook,
//   Instagram,
//   Youtube,
//   Linkedin,
//   ArrowRight,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";

// export const Footer = () => {
//   return (
//     <Box bg="#FFFAE2" color="#2A2926" pt={10} pb={6} px={{ base: 4, md: 16 }}>
//       {/* Top Social Icons */}
//       <HStack gap={4} mb={6}>
//         {[Linkedin, Youtube, Facebook, Instagram].map((IconComp, i) => (
//           <IconButton
//             key={i}
//             aria-label="Social Icon"
//             variant="ghost"
//             _hover={{ bg: "transparent", opacity: 0.7 }}
//           ><Icon as={IconComp} boxSize={5} /></IconButton>
//         ))}
//       </HStack>

//       {/* Main Grid */}
//       <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={10} mb={10}>
//         {/* Left - Logo + Text */}
//         <GridItem>
//           <Image src="/logo.svg" alt="CHADET" h="24px" mb={4} />
//           <Text fontSize="sm">
//             Powered by skincare and rooted in confidence, every shade is made to feel as good as it looks.
//           </Text>
//         </GridItem>

//         {/* Middle - Subscribe */}
//         <GridItem>
//           <Text fontSize="2xl" fontWeight="medium" mb={2}>
//             Stay Connected
//           </Text>
//           <Text fontSize="sm" mb={4}>
//             Get insights, updates, and success stories delivered to your inbox.
//           </Text>
//           {/* <InputGroup borderBottom="1px solid #2A2926" pb={1}>
//             <Input
//               placeholder="E-mail"
//               variant="unstyled"
//               _placeholder={{ color: "#A3A29E" }}
//             />
//             <InputRightElement> */}
//               <IconButton
//                 aria-label="Subscribe"
//                 size="sm"
//                 variant="ghost"
//               ><ArrowRight /></IconButton>
//             {/* </InputRightElement>
//           </InputGroup> */}
//         </GridItem>

//         {/* Right - Links */}
//         <GridItem>
//           <Flex justify="space-between" flexWrap="wrap">
//             <VStack align="start" gap={2}>
//               <Text fontSize="sm">About Us</Text>
//               <Text fontSize="sm">Benefits</Text>
//               <Text fontSize="sm">Our Process</Text>
//               <Text fontSize="sm">Testimonials</Text>
//               <Text fontSize="sm">FAQs</Text>
//             </VStack>
//             <VStack align="start" gap={2}>
//               <Text fontSize="sm">Help Center</Text>
//               <Text fontSize="sm">Pricing</Text>
//               <Text fontSize="sm">Privacy Policy</Text>
//               <Text fontSize="sm">Terms & Conditions</Text>
//             </VStack>
//           </Flex>
//         </GridItem>
//       </Grid>

//       {/* Bottom Divider */}
//       <Box borderTop="1px solid #A3A29E" pt={4}>
//         <Flex
//           justify="space-between"
//           flexWrap="wrap"
//           direction={{ base: "column", md: "row" }}
//           align={{ base: "flex-start", md: "center" }}
//           fontSize="sm"
//         >
//           <Text mb={{ base: 2, md: 0 }}>©2025 chadet.com All Rights Reserved.</Text>

//           <HStack gap={6} color="#2A2926">
//             <HStack gap={1}>
//               <Icon as={MapPin} boxSize={4} />
//               <Text>Ktm, Nepal</Text>
//             </HStack>
//             <HStack gap={1}>
//               <Icon as={Mail} boxSize={4} />
//               <Text>chadetinfo@gmail.com</Text>
//             </HStack>
//             <HStack gap={1}>
//               <Icon as={Phone} boxSize={4} />
//               <Text>01-4004789</Text>
//             </HStack>
//           </HStack>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };
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
  Image,
} from "@chakra-ui/react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const Footer = () => {
  return (
    <Box bg="background.body" color="brand.dark" pt={10} pb={6} px={{ base: 4, md: 16 }}>
      {/* Top Social Icons */}
      <HStack gap={4} mb={6}>
        {[Linkedin, Youtube, Facebook, Instagram].map((IconComp, i) => (
          <IconButton
            key={i}
            aria-label="Social Icon"
            variant="ghost"
            _hover={{ bg: "transparent", opacity: 0.7 }}
          ><Icon as={IconComp} boxSize={5} /></IconButton>
        ))}
      </HStack>

      {/* Main Grid */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={10} mb={10}>
        {/* Left - Logo + Text */}
        <GridItem>
          <Image src="/logo.svg" alt="CHADET" h="24px" mb={4} />
          <Text fontSize="sm">
            Powered by skincare and rooted in confidence, every shade is made to feel as good as it looks.
          </Text>
        </GridItem>

        {/* Middle - Subscribe */}
        <GridItem>
          <Text fontSize="2xl" fontWeight="medium" mb={2}>
            Stay Connected
          </Text>
          <Text fontSize="sm" mb={4}>
            Get insights, updates, and success stories delivered to your inbox.
          </Text>
          {/* Email subscribe input can go here in the future */}
          <IconButton
            aria-label="Subscribe"
            size="sm"
            variant="ghost"
          ><ArrowRight /></IconButton>
        </GridItem>

        {/* Right - Links */}
        <GridItem>
          <Flex justify="space-between" flexWrap="wrap">
            <VStack align="start" gap={2}>
              <Text fontSize="sm">About Us</Text>
              <Text fontSize="sm">Benefits</Text>
              <Text fontSize="sm">Our Process</Text>
              <Text fontSize="sm">Testimonials</Text>
              <Text fontSize="sm">FAQs</Text>
            </VStack>
            <VStack align="start" gap={2}>
              <Text fontSize="sm">Help Center</Text>
              <Text fontSize="sm">Pricing</Text>
              <Text fontSize="sm">Privacy Policy</Text>
              <Text fontSize="sm">Terms & Conditions</Text>
            </VStack>
          </Flex>
        </GridItem>
      </Grid>

      {/* Bottom Divider */}
      <Box borderTop="1px solid" borderColor="brand.border" pt={4}>
        <Flex
          justify="space-between"
          flexWrap="wrap"
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          fontSize="sm"
        >
          <Text mb={{ base: 2, md: 0 }}>©2025 chadet.com All Rights Reserved.</Text>

          <HStack gap={6} color="brand.dark">
            <HStack gap={1}>
              <Icon as={MapPin} boxSize={4} />
              <Text>Ktm, Nepal</Text>
            </HStack>
            <HStack gap={1}>
              <Icon as={Mail} boxSize={4} />
              <Text>chadetinfo@gmail.com</Text>
            </HStack>
            <HStack gap={1}>
              <Icon as={Phone} boxSize={4} />
              <Text>01-4004789</Text>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};



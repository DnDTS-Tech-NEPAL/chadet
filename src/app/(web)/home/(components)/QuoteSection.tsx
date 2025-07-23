import { Box, Text } from "@chakra-ui/react";
import { useConfigQuery } from "@/hooks/api";

export const QuoteSection = () => {
  const { data, isLoading } = useConfigQuery();

  const fallbackQuote = "Beauty begins the moment you decide to be yourself.";
  const fallbackAuthor = "Coco Chanel";

  const quote = data?.quote || fallbackQuote;
  const quoteBy = data?.quote_by || fallbackAuthor;

  if (isLoading) return null;

  return (
    <Box bg={"background.body"} textAlign="center" py={12} px={4}>
      <Box maxW={"3xl"} mx={"auto"} lineHeight={3} gap={4}>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          fontStyle="italic"
          color="gray.800"
          mb={2}
        >
          {quote}
        </Text>
        <Text fontSize="2xl" color="text.secondary" pt={6}>
          {quoteBy}
        </Text>
      </Box>
    </Box>
  );
};

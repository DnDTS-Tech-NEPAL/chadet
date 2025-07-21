import { defineRecipe } from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
  base: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
  },
  variants: {
    variant: {
      heading1: {
        fontSize: "67px",
        lineHeight: "80px",
        color: "brand.heading.primary",
      },
      headingAccent: {
        fontSize: "50px",
        fontWeight: 700,
        color: "brand.heading.accent",
      },
    },
  },
  defaultVariants: {
    variant: "heading1",
  },
});

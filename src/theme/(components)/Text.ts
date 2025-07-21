import { defineRecipe } from "@chakra-ui/react";

export const textRecipe = defineRecipe({
  base: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    color: "brand.dark",
  },
  variants: {
    variant: {
      subtitle1: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "19.2px",
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "16.8px",
      },
      paragraphLarge: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "27px",
      },
      paragraphSmall: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
  },
  defaultVariants: {
    variant: "subtitle1",
  },
});

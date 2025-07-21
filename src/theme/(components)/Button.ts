import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: 500,
    fontSize: "16px",
    minH: "44px",
    px: "20px",
    borderRadius: "8px",
  },
  variants: {
    variant: {
      primary: {
        bg: "brand.button",
        color: "white",
        _hover: {
          bg: "#382e2e", 
        },
      },
      outline: {
        border: "1px solid",
        borderColor: "brand.button",
        color: "brand.button",
        bg: "transparent",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

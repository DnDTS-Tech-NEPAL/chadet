import { defineRecipe } from "@chakra-ui/react";

export const badgeRecipe = defineRecipe({
  base: {
    borderRadius: "8px",
    height: "32px",
    fontWeight: 500,
    fontSize: "14px",
    px: "12px",
    display: "inline-flex",
    alignItems: "center",
  },
  variants: {
    variant: {
      primary: {
        bg: "primary.50",
        color: "primary.400",
      },
      danger: {
        bg: "#FFE0E0",
        color: "danger.100",
      },
      dark: {
        bg: "brand.dark",
        color: "white",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

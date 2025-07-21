import { defineRecipe } from "@chakra-ui/react";

export const useTextareaRecipe = () =>
  defineRecipe({
    className: "chakra-textarea",
    base: {
      width: "100%",
      minHeight: "160px",
      borderRadius: "8px",
      border: "1px solid",
      borderColor: "brand.dark",
      color: "brand.dark",
      _placeholder: {
        color: "grey.300",
      },
      _focus: {
        borderColor: "primary.300 !important",
        outline: "none !important",
      },
      _invalid: {
        borderColor: "danger.100 !important",
        _focus: {
          borderColor: "danger.100 !important",
        },
      },
    },
  });

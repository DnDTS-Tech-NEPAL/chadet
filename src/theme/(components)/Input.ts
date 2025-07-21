import { defineRecipe } from "@chakra-ui/react";

export const useInputRecipe = () =>
  defineRecipe({
    className: "chakra-input",
    base: {
      borderRadius: "8px",
      color: "brand.dark",
      border: "1px solid",
      borderColor: "brand.dark",
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

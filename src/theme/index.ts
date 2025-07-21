import { defineConfig } from "@chakra-ui/react";
import {
  badgeRecipe,
  buttonRecipe,
  headingRecipe,
  textRecipe,
  useTextareaRecipe,
} from "./(components)";

import { colors } from "./colors"; 

const customConfig = defineConfig({
  globalCss: {
    body: {
      bg: "background.body",
      color: "brand.dark",
    },
    "a:focus": {
      outline: "none",
    },
  },
  theme: {
    tokens: {
      colors: colors, 
    },
    recipes: {
      badge: badgeRecipe,
      button: buttonRecipe,
      heading: headingRecipe,
      text: textRecipe,
      textarea: useTextareaRecipe(),
    },
  },
});

export default customConfig;


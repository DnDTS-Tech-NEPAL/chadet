import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { badgeRecipe, buttonRecipe, headingRecipe, textRecipe, useInputRecipe, useTextareaRecipe } from "./(components)";
import { colors } from "./colors";


const customConfig = defineConfig({
  globalCss: {
    body: {
      color: "primary.400",
    },
    "a:focus": {
      outline: "none",
    },
    ".chakra-radio-group__itemText": {
      width: "full",
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
    recipes: {
      badge: badgeRecipe,
      button: buttonRecipe,
      heading: headingRecipe,
      text: textRecipe,
    },
  },
});

const chakraSystem = createSystem(defaultConfig, customConfig);
export default chakraSystem;

// generate dynamic chakra system from the server
export const createDynamicChakraSystem = () => {
  const inputRecipe = useInputRecipe();
  const textareaRecipe = useTextareaRecipe();

  const dynamicConfig = defineConfig({
    globalCss: {
      body: {
        color: "primary.400",
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
        input: inputRecipe,
        text: textRecipe,
        textarea: textareaRecipe,
      },
    },
  });

  return createSystem(defaultConfig, dynamicConfig);
};

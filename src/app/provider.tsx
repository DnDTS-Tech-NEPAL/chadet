"use client";

import { ColorModeProvider, ColorModeProviderProps } from "@/components";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}

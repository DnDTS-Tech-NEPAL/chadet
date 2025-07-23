"use client";

import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createDynamicChakraSystem } from "@/theme";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 0,
          },
        },
      })
  );

  const dynamicChakraSystem = createDynamicChakraSystem();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={dynamicChakraSystem}>
        {children}
        {/* <Scrolltop /> */}
        {/* <Toaster /> */}
      </ChakraProvider>
    </QueryClientProvider>
  );
};

import React from "react";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";

// Extend theme
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// @fonts config
const fonts = {
  body: "Aeonik",
};

// @colors
const colors = {
  primary: "#0FA44A",
  white: "#FEFEFE",
  disabled: "#696969",
  background: "#fbfbfb",
  brand: {
    900: "#0FA44A",
  },
};

export const theme = extendTheme({ config, colors, fonts });

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

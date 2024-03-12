import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import { Box, HStack } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <HStack w={"100%"} h={"100vh"} bg={"#FBFBFB"} spacing={0} pos="relative">
      <Box pos="fixed" h="full" w="218px" zIndex={2} top={0} left={0}>
        <SideNav />
      </Box>
      <Box w="full" h="full" style={{ marginLeft: "218px" }} zIndex={1}>
        <Outlet />
      </Box>
    </HStack>
  );
};

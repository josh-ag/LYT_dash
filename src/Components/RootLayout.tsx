import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import { Box, HStack } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <HStack
      w={"full"}
      h={"auto"}
      bg={"#FBFBFB"}
      pos="relative"
      alignItems={"stretch"}
    >
      <Box
        pos="fixed"
        h="full"
        minH={"100vh"}
        w="218px"
        zIndex={2}
        top={0}
        left={0}
        overflowY={"auto"}
      >
        <SideNav />
      </Box>
      <Box w="full" h="auto" style={{ marginLeft: "218px" }} zIndex={1}>
        <Outlet />
      </Box>
    </HStack>
  );
};

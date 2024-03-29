import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import { Box, Flex } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <Flex
      direction={"column"}
      w={"full"}
      h={"auto"}
      bg={"#FBFBFB"}
      pos="relative"
      alignItems={"stretch"}
    >
      <SideNav />
      <Box ml={{ base: 0, sm: "0px", lg: "218px" }} zIndex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
};

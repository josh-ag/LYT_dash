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
      <Box style={{ marginLeft: "218px" }} zIndex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
};

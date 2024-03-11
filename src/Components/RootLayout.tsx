import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";
import { HStack } from "@chakra-ui/react";

export const RootLayout = () => {
  return (
    <HStack w={"100%"} h={"100vh"} bg={"#FBFBFB"} spacing={0}>
      <SideNav />
      <Outlet />
    </HStack>
  );
};

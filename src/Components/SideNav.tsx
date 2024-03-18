import { Flex, VStack, Link, HStack, Text, Stack } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
import { Link as RouterLink } from "react-router-dom";

//@sideNav items
const items = [
  { title: "Dashboard", path: "/" },
  { title: "Analytics", path: "/analytics" },
  { title: "Communities", path: "/communities" },
  { title: "Notifications", path: "/notifications" },
  { title: "Media", path: "/media" },
  { title: "Support", path: "/support" },
  { title: "Settings", path: "/settings" },
];

export const SideNav = () => {
  return (
    <VStack
      style={{ backgroundColor: "#fff" }}
      pos={"relative"}
      spacing={"32px"}
      align={"center"}
      justify={"space-between"}
      h="full"
      width="full"
    >
      <Stack direction={"column"} spacing={"29px"}>
        <Flex justify={"center"} align={"center"} h={"92px"} p={6}>
          <svg
            width="55"
            height="21"
            viewBox="0 0 55 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 1V18.5H18.9014" stroke="#0FA44A" strokeWidth="4" />
            <path
              d="M14.8311 2.25L23.2818 8.91667M23.2818 8.91667L32.155 2.25M23.2818 8.91667V19.75"
              stroke="#0FA44A"
              strokeWidth="4"
            />
            <path
              d="M36.3801 2.875H45.2534M54.1266 2.875H45.2534M45.2534 2.875V20.375"
              stroke="#0FA44A"
              strokeWidth="4"
            />
          </svg>
        </Flex>

        <VStack spacing={"29px"} w={"full"}>
          {items.map((item, index) => (
            <NavItem item={item} key={index} />
          ))}
        </VStack>
      </Stack>
      <Link
        as={RouterLink}
        to={"/"}
        w={"full"}
        p={"10px"}
        _hover={{ textDecoration: "none" }}
        alignSelf={"flex-end"}
        mb={"24px"}
      >
        <HStack spacing={"16px"} ml={"29.5px"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H15V4H6V20H15V18H17V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z"
              fill="#0FA44A"
            />
            <path
              d="M16.09 15.59L17.5 17L22.5 12L17.5 7L16.09 8.41L18.67 11H9V13H18.67L16.09 15.59Z"
              fill="#0FA44A"
            />
          </svg>
          <Text
            color="#0FA44A"
            fontWeight={400}
            fontSize={"20"}
            textAlign={"center"}
          >
            Log-out
          </Text>
        </HStack>
      </Link>
    </VStack>
  );
};

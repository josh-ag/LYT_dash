import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Search } from "./Search";
import { useRef, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Profile } from "./Profile";
import { NavItem } from "./NavItem";

const drawerItems = [
  { title: "Dashboard", path: "/" },
  { title: "Analytics", path: "/analytics" },
  { title: "Communities", path: "/communities" },
  { title: "Notifications", path: "/notifications" },
  { title: "Media", path: "/media" },
  { title: "Support", path: "/support" },
  { title: "Settings", path: "/settings" },
];

const AppDrawer = ({ isOpen, onClose, btnRef }: any) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
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
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={"29px"} w={"full"}>
              {drawerItems.map((item, index) => (
                <NavItem item={item} key={index} />
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
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
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Appbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HStack
        bg="#FFFFFF"
        px={2}
        w="full"
        h={"92px"}
        align="center"
        spacing={"20px"}
        justify={"space-between"}
      >
        <IconButton
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
          variant={"ghost"}
          aria-label="hamburger menu"
          icon={<HamburgerIcon boxSize={6} />}
        />

        <Text
          fontSize={"20px"}
          fontWeight={"400"}
          lineHeight={"24"}
          color="#1A1A1A"
          noOfLines={1}
        >
          Metrics looking good, Snow!
        </Text>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Profile />
      </HStack>
      <AppDrawer onClose={onClose} isOpen={isOpen} btnRef={btnRef} />
    </>
  );
};

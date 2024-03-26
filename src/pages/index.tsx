import { Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { Followers } from "../Components/Followers";
import { Likes } from "../Components/Likes";
import { Comments } from "../Components/Comments";
import { Audience } from "../Components/Audience";
import { EngagementComponent } from "../Components/EngagementComponent";

export default function MainPage() {
  return (
    <VStack w="full" h="full" bg="#FBFBFB" spacing={"32px"}>
      {/* Appbar  */}
      <Appbar />

      {/* Perf. Metrics */}
      <Flex direction={"column"} w="full" gap={"24px"} px={"32px"}>
        <HStack alignItems={"center"} justifyContent={"space-between"} w="full">
          <Text
            fontSize={24}
            lineHeight={"28.8px"}
            fontWeight={400}
            color="#1A1A1A"
          >
            Performance Metrics
          </Text>
          <Link
            as={RouterLink}
            to="/download"
            color="#0FA44A"
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"19.2px"}
            textDecor={"none"}
            borderBottomWidth={"1px"}
            borderBottomColor={"#0FA44A"}
            _hover={{ textDecoration: "none" }}
            textAlign={"center"}
          >
            Download Summary
          </Link>
        </HStack>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "32px", sm: "8px", "2xl": "36px" }}
          w="full"
          align="center"
          justify={"space-between"}
        >
          <Followers />
          <Likes />
          <Comments />
        </Flex>
      </Flex>

      <Flex
        direction={{ base: "column", xl: "row" }}
        w="full"
        h="auto"
        gap={"46px"}
        px={"32px"}
      >
        <EngagementComponent />
        <Audience />
      </Flex>
    </VStack>
  );
}

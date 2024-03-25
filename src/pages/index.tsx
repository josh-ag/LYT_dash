import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { Followers } from "../Components/Followers";
import { Likes } from "../Components/Likes";
import { Comments } from "../Components/Comments";
import { Engagement } from "../Components/Engagement";
import { Audience } from "../Components/Audience";
import { PostActivity } from "../Components/PostActivity";

export default function MainPage() {
  return (
    <VStack w="full" h="full" bg="#FBFBFB" spacing={"32px"}>
      {/* Appbar  */}
      <Appbar />

      {/* Perf. Metrics */}
      <VStack w="full" spacing={"24px"} px={"32px"}>
        <HStack alignItems={"center"} justifyContent={"space-between"} w="full">
          <Text fontSize={24} fontWeight={400} color="#1A1A1A">
            Performance Metrics
          </Text>
          <Link
            as={RouterLink}
            to="/download"
            color="#0FA44A"
            fontSize={"16px"}
            fontWeight={400}
            textDecor={"underline"}
          >
            Download Summary
          </Link>
        </HStack>
        <HStack
          spacing={"36px"}
          w="full"
          align="center"
          justify={"space-between"}
        >
          <Followers />
          <Likes />
          <Comments />
        </HStack>
      </VStack>

      <HStack w="full" h="auto" spacing={"46px"} px={"32px"} align={"stretch"}>
        <VStack w="full" spacing={"36px"} h="auto">
          <Engagement />
          <PostActivity />
        </VStack>

        <Audience />
      </HStack>
    </VStack>
  );
}

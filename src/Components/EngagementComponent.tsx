import { VStack } from "@chakra-ui/react";
import { Engagement } from "./Engagement";
import { PostActivity } from "./PostActivity";

export const EngagementComponent = () => (
  <VStack flex={1} w="full" spacing={"36px"} h="auto">
    <Engagement />
    <PostActivity />
  </VStack>
);

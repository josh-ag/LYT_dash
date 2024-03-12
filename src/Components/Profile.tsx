import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import profile from "../assets/images/profile.jpeg";

export const Profile = () => {
  return (
    <HStack alignItems={"center"} px={"32px"}>
      <Avatar width={"40px"} height={"40px"} src={profile} />
      <VStack spacing={0}>
        <Text color="#1A1A1A" fontWeight={400} fontSize={16}>
          Snow Olohijere
        </Text>
        <Text color="#6A6A6A" fontSize={12} fontWeight={400}>
          uch231@gmail.com
        </Text>
      </VStack>
    </HStack>
  );
};

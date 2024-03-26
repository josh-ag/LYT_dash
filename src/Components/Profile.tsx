import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import profile from "../assets/images/profile.jpeg";

export const Profile = () => {
  return (
    <HStack alignItems={"center"} px={"32px"}>
      <Avatar width={"40px"} height={"40px"} src={profile} />
      <VStack spacing={0}>
        <Text
          fontFamily={"Aeonik"}
          color="#1A1A1A"
          lineHeight={"19.2px"}
          fontWeight={400}
          fontSize={"16px"}
        >
          Snow Olohijere
        </Text>
        <Text color="#6A6A6A" fontSize={12} fontWeight={400}>
          uch231@gmail.com
        </Text>
      </VStack>
    </HStack>
  );
};

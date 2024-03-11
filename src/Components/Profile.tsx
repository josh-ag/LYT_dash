import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <HStack alignItems={"center"} px={"32px"}>
      <Avatar
        width={"40px"}
        height={"40px"}
        src="https://bit.ly/sage-adebayo"
      />
      <VStack spacing={0}>
        <Text color="#1A1A1A" fontWeight={400} fontSize={16}>
          Snow Olohijere
        </Text>
        <Text color="#131313" fontSize={12} fontWeight={400}>
          uch231@gmail.com
        </Text>
      </VStack>
    </HStack>
  );
};

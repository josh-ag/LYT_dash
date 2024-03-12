import { Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <VStack w="full" h="full" spacing={10} py={12}>
      <VStack>
        <Text
          fontSize={"32px"}
          lineHeight={"29px"}
          fontWeight={"500"}
          color={"#323232"}
        >
          Oops
        </Text>
        <Text fontSize={"16px"} fontWeight={"400"} color={"#6A6A6A"}>
          Something went wrong. try later
        </Text>
      </VStack>

      <Button onClick={() => navigate(-1)}>Take me back</Button>
    </VStack>
  );
};

import { HStack, Text, VStack } from "@chakra-ui/react";
import { ChartComponent } from "./Charts";
import { TopLocations } from "./TopLocations";

export const Audience = () => {
  return (
    <VStack w="full" spacing={"20px"} h="full">
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text
          fontSize={"20px"}
          fontWeight={"400"}
          color={"#1A1A1A"}
          lineHeight={"24px"}
        >
          Audience Demography
        </Text>
      </HStack>
      <VStack w="full" bg="#FFF" py="23.69px" rounded={"4px"}>
        <ChartComponent />
        <TopLocations />
      </VStack>
    </VStack>
  );
};

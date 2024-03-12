import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { DoughnutChart } from "./Doughnut";
import { StackBarChart } from "./StackChart";

export const ChartComponent = () => {
  return (
    <VStack
      w="full"
      borderBottom={"1px solid #E5E5E5"}
      pb="12px"
      spacing={"39px"}
    >
      <Flex w="full" justify="flex-end">
        <HStack spacing={"20px"} align={"center"} mr="33px">
          {[
            { label: "Male", color: "#283350" },
            { label: "Female", color: "#0FA44A" },
            { label: "Others", color: "#FFF854" },
          ].map((item, index) => (
            <HStack key={index} cursor={"pointer"}>
              <Box bg={item.color} w="8px" h="8px" rounded={"full"} />
              <Text
                color={"#6A6A6A"}
                fontSize={"12px"}
                fontWeight={"400"}
                lineHeight={"14.4px"}
              >
                {item.label}
              </Text>
            </HStack>
          ))}
        </HStack>
      </Flex>
      <HStack w="full" justify={"space-around"} align={"flex-start"}>
        <DoughnutChart label={"Gender"} />
        <StackBarChart label={"Age Group"} />
      </HStack>
    </VStack>
  );
};
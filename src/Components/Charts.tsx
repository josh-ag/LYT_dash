import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { DoughnutChart } from "./Doughnut";
import { StackedBarChart } from "./StackedBarChart";

export const ChartComponent = () => {
  return (
    <VStack
      w="full"
      h="full"
      minW={"full"}
      borderBottom={"1px solid #E5E5E5"}
      pb="12px"
      spacing={"39px"}
    >
      <Flex w="full" justify="flex-end">
        <HStack spacing={"20px"} align={"center"} mr="33px">
          {/* Chart Legend  */}
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
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "column",
          "2xl": "row",
        }}
        w="full"
        justify={"flex-start"}
        gap={"48px"}
      >
        <DoughnutChart label={"Gender"} />
        <StackedBarChart label={"Age Group"} />
      </Flex>
    </VStack>
  );
};

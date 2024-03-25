import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { BarChart } from "./Barchart";

export const Engagement = () => {
  return (
    <VStack w="full" spacing={"20px"}>
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text fontSize={"20px"} fontWeight={"400"} color={"#1A1A1A"}>
          Engagement Rates
        </Text>

        <Button
          w="100px"
          h="32px"
          rounded={"4px"}
          bg="rgba(15, 164, 74, .1)"
          color={"#1A1A1A"}
          variant={"unstyled"}
          rightIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9981 5.32599L8.00008 10.198L3.00208 5.32599C2.91278 5.23876 2.7929 5.18993 2.66808 5.18993C2.54325 5.18993 2.42337 5.23876 2.33408 5.32599C2.29084 5.36835 2.25649 5.41892 2.23304 5.47472C2.20959 5.53053 2.19751 5.59045 2.19751 5.65099C2.19751 5.71152 2.20959 5.77144 2.23304 5.82725C2.25649 5.88306 2.29084 5.93362 2.33408 5.97599L7.65108 11.16C7.74445 11.251 7.86968 11.3019 8.00008 11.3019C8.13047 11.3019 8.2557 11.251 8.34908 11.16L13.6661 5.97699C13.7096 5.93459 13.7442 5.8839 13.7679 5.82791C13.7915 5.77192 13.8037 5.71176 13.8037 5.65099C13.8037 5.59021 13.7915 5.53006 13.7679 5.47406C13.7442 5.41807 13.7096 5.36738 13.6661 5.32499C13.5768 5.23776 13.4569 5.18893 13.3321 5.18893C13.2072 5.18893 13.0874 5.23776 12.9981 5.32499V5.32599Z"
                fill="#1A1A1A"
              />
            </svg>
          }
        >
          Weekly
        </Button>
      </HStack>
      <BarChart />
    </VStack>
  );
};

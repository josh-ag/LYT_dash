import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { Country } from "./Country";

//Posts
const Countries = [
  {
    name: "Nigeria",
    visitors_count: "5,430",
    percentage: "2.2",
  },
  {
    name: "Germany",
    visitors_count: "2,610",
    percentage: "1.12",
  },
  {
    name: "Switzerland",
    visitors_count: "1,925",
    percentage: "1.1",
  },

  {
    name: "Iraq",
    visitors_count: "1,571",
    percentage: "0.8",
  },
];

export const TopLocations = () => {
  return (
    <VStack w="full" spacing={"20px"} px={"32px"} py={"14px"}>
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text fontSize={"20px"} fontWeight={"500"} color={"#1A1A1A"}>
          Top Locations
        </Text>
        <Button
          variant={"outline"}
          rounded={"4px"}
          borderColor={"#0FA44A"}
          color={"#0FA44A"}
        >
          See More
        </Button>
      </HStack>

      <VStack w="full" spacing={"16px"}>
        <HStack
          w="full"
          borderBottom={"1px solid #8F8F8F"}
          justify={"space-between"}
          align={"center"}
          py="9px"
        >
          <Text
            lineHeight={"14.4px"}
            fontSize={"12px"}
            fontWeight={"500"}
            color={"#8F8F8F"}
          >
            Country
          </Text>
          <Text
            lineHeight={"14.4px"}
            fontSize={"12px"}
            fontWeight={"500"}
            color={"#8F8F8F"}
          >
            Visitors
          </Text>
        </HStack>
        {Countries.map((country: any, index: number) => (
          <Country country={country} key={index} />
        ))}
      </VStack>
    </VStack>
  );
};

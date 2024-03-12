import { Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

type CountryProps = {
  name: string;
  visitors_count: string;
  percentage: string;
};

export const Country = ({ country }: { country: CountryProps }) => {
  return (
    <HStack
      w="full"
      bg="#FFF"
      px={"20px"}
      py={"17px"}
      align={"center"}
      justify={"space-between"}
      rounded={"4px"}
      borderBottom={"1px solid #E5E5E5"}
    >
      <Text
        w="full"
        fontSize={"14px"}
        lineHeight={"16.8px"}
        fontWeight={"500"}
        color="#323232"
        noOfLines={2}
      >
        {country.name}
      </Text>

      <VStack align={"flex-end"} spacing={"7px"}>
        <Text
          w="full"
          fontSize={"14px"}
          lineHeight={"16.8px"}
          fontWeight={"500"}
          color="#131313"
          noOfLines={2}
        >
          {country.visitors_count}
        </Text>
        <HStack align={"center"} spacing={"1px"} justify={"center"}>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.57927 6.72099V0.592731M3.57927 0.592731L6.52083 3.5343M3.57927 0.592731L0.637702 3.5343"
              stroke="#0FA44A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Text
            fontSize={"8px"}
            fontWeight={400}
            color="#0FA44A"
            lineHeight={"9.6px"}
          >
            {country.percentage}%
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

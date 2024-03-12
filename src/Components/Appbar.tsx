import { HStack, Text } from "@chakra-ui/react";
import { Search } from "./Search";
import { useState } from "react";
import { Profile } from "./Profile";

export const Appbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <HStack
      bg="#FFFFFF"
      p={6}
      w="full"
      h={"92px"}
      align="center"
      justify={"space-between"}
    >
      <Text fontSize={20} fontWeight={400}>
        Metrics looking good, Snow!
      </Text>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Profile />
    </HStack>
  );
};

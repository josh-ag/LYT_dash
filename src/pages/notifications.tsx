import { Text, VStack } from "@chakra-ui/react";
import { Appbar } from "../Components/Appbar";

export const NotificationsPage = () => {
  return (
    <VStack w="full" h="full" bg="#FBFBFB" spacing={"32px"}>
      {/* Appbar  */}
      <Appbar />

      <Text>Notifications Page</Text>
    </VStack>
  );
};

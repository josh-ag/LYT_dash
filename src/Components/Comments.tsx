import { HStack, Text, VStack } from "@chakra-ui/react";

export const Comments = () => {
  return (
    <VStack
      minW={"350px"}
      w="full"
      bg={"#FFFFFF"}
      height={"auto"}
      minHeight={"160px"}
      px="16.03px"
      py="23.69px"
      rounded={"4px"}
      spacing={"25px"}
    >
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text
          lineHeight={"19.2px"}
          fontSize={"16px"}
          fontWeight={400}
          color="#6A6A6A"
        >
          Comments
        </Text>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15.8333L15.8333 5M15.8333 5V15.4M15.8333 5H5.43333"
            stroke="#1A1A1A"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HStack>
      <Text
        fontSize={"40px"}
        fontWeight={500}
        color="#1A1A1A"
        alignSelf={"flex-start"}
        lineHeight={"48px"}
      >
        289.1k
      </Text>

      <HStack w="full" justify={"space-between"} align={"center"}>
        <HStack spacing={"9px"} alignItems={"center"}>
          <HStack>
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_771)">
                <path
                  d="M11.8143 18.1283V5.87174M11.8143 5.87174L17.6974 11.7549M11.8143 5.87174L5.93117 11.7549"
                  stroke="#0FA44A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_771">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.0292969 12) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Text fontSize={"16px"} fontWeight={400} color="#0FA44A">
              2.7%
            </Text>
          </HStack>
          <Text fontSize={"16px"} fontWeight={400} color="#6A6A6A">
            in the last 7 days
          </Text>
        </HStack>

        <svg
          width="54"
          height="24"
          viewBox="0 0 54 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 22C10.6533 22 10.081 21.8946 9.65901 21.7071C9.23705 21.5196 9 21.2652 9 21V13C9 12.7348 9.23705 12.4804 9.65901 12.2929C10.081 12.1054 10.6533 12 11.25 12C11.8467 12 12.419 12.1054 12.841 12.2929C13.2629 12.4804 13.5 12.7348 13.5 13V21C13.5 21.2652 13.2629 21.5196 12.841 21.7071C12.419 21.8946 11.8467 22 11.25 22ZM22.5 22C21.9033 22 21.331 21.8946 20.909 21.7071C20.4871 21.5196 20.25 21.2652 20.25 21V3C20.25 2.73478 20.4871 2.48043 20.909 2.29289C21.331 2.10536 21.9033 2 22.5 2C23.0967 2 23.669 2.10536 24.091 2.29289C24.5129 2.48043 24.75 2.73478 24.75 3V21C24.75 21.2652 24.5129 21.5196 24.091 21.7071C23.669 21.8946 23.0967 22 22.5 22ZM33.75 22C33.1533 22 32.581 21.8946 32.159 21.7071C31.7371 21.5196 31.5 21.2652 31.5 21V9C31.5 8.73478 31.7371 8.48043 32.159 8.29289C32.581 8.10536 33.1533 8 33.75 8C34.3467 8 34.919 8.10536 35.341 8.29289C35.7629 8.48043 36 8.73478 36 9V21C36 21.2652 35.7629 21.5196 35.341 21.7071C34.919 21.8946 34.3467 22 33.75 22ZM45 22C44.4033 22 43.831 21.8946 43.409 21.7071C42.9871 21.5196 42.75 21.2652 42.75 21V17C42.75 16.7348 42.9871 16.4804 43.409 16.2929C43.831 16.1054 44.4033 16 45 16C45.5967 16 46.169 16.1054 46.591 16.2929C47.013 16.4804 47.25 16.7348 47.25 17V21C47.25 21.2652 47.013 21.5196 46.591 21.7071C46.169 21.8946 45.5967 22 45 22Z"
            fill="#0FA44A"
          />
        </svg>
      </HStack>
    </VStack>
  );
};

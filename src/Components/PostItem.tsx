import { Flex, HStack, Image, Text } from "@chakra-ui/react";

type PostItemProps = {
  title: string;
  img: string;
  date: string;
  like_count: number;
};

export const PostItem = ({ post }: { post: PostItemProps }) => {
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
      <HStack w="full" align={"center"} spacing={"8px"}>
        <Image
          src={post.img}
          objectFit={"cover"}
          alt=""
          w={"36px"}
          h="37px"
          rounded={"4px"}
        />
        <Text
          fontSize={"12px"}
          lineHeight={"14.4px"}
          fontWeight={"400"}
          color="#1A1A1A"
          noOfLines={2}
        >
          {post.title}
        </Text>
      </HStack>

      <Text
        w="full"
        fontSize={"12px"}
        lineHeight={"14.4px"}
        fontWeight={"500"}
        color="#323232"
        noOfLines={2}
        textAlign={"center"}
      >
        {post.date}
      </Text>

      <HStack align={"center"} spacing={"8px"} w="full" justify={"center"}>
        <Flex
          bg={"#0FA44A"}
          w={"20px"}
          h={"20px"}
          rounded={"full"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill={"#0FA44A"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
              fill="white"
            />
            <path
              d="M12.3381 4.41187C10.9719 3.475 9.50969 3 7.9925 3C6.62719 3 5.29625 3.40625 4.03656 4.2025C2.76625 5.00719 1.52094 6.46875 0.5 8C1.32563 9.375 2.455 10.7887 3.63125 11.5994C4.98063 12.5287 6.44781 13 7.9925 13C9.52375 13 10.9878 12.5291 12.3456 11.6003C13.5409 10.7812 14.6784 9.36938 15.5 8C14.6756 6.64281 13.5344 5.2325 12.3381 4.41187ZM8 11C7.40666 11 6.82664 10.8241 6.33329 10.4944C5.83994 10.1648 5.45542 9.69623 5.22836 9.14805C5.0013 8.59987 4.94189 7.99667 5.05764 7.41473C5.1734 6.83279 5.45912 6.29824 5.87868 5.87868C6.29824 5.45912 6.83279 5.1734 7.41473 5.05764C7.99667 4.94189 8.59987 5.0013 9.14805 5.22836C9.69623 5.45542 10.1648 5.83994 10.4944 6.33329C10.8241 6.82664 11 7.40666 11 8C10.9991 8.79537 10.6827 9.5579 10.1203 10.1203C9.5579 10.6827 8.79537 10.9991 8 11Z"
              fill="white"
            />
          </svg>
        </Flex>

        <Text
          fontSize={"12px"}
          fontWeight={500}
          color="#323232"
          lineHeight={"14.4px"}
        >
          {post.like_count}K
        </Text>
      </HStack>

      <HStack align={"center"} spacing={1}>
        {[1, 2, 3].map((_, index) => (
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={index}
          >
            <path
              d="M3 5.5C4.38071 5.5 5.5 4.38071 5.5 3C5.5 1.61929 4.38071 0.5 3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5Z"
              fill="#323232"
            />
          </svg>
        ))}
      </HStack>
    </HStack>
  );
};

import { HStack, Text, VStack } from "@chakra-ui/react";
import { PostItem } from "./PostItem";
import post1 from "../assets/images/post1.jpeg";
import post2 from "../assets/images/post2.jpeg";

//Posts
const Posts = [
  {
    title: "Success can be achieved by being bold enough...",
    img: post1,
    date: "May 30",
    like_count: 1.1,
  },
  {
    title: "Knowing what to do can never be okay, you have to...",
    img: post2,
    date: "May 30",
    like_count: 3.1,
  },
];

export const PostActivity = () => {
  return (
    <VStack w="full" spacing={"20px"}>
      <HStack w="full" justify={"space-between"} align={"center"}>
        <Text fontSize={"20px"} fontWeight={"500"} color={"#1A1A1A"}>
          Post Activity
        </Text>
      </HStack>

      <VStack w="full" spacing={0}>
        {Posts.map((post: any, index: number) => (
          <PostItem post={post} key={index} />
        ))}
      </VStack>
    </VStack>
  );
};

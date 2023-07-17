import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
  Button,
} from "@/Components/ClientChakra";
import HeroButtons from "./HeroButtons";
import { useColorMode } from "@/Components/ClientChakra";

const Hero = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4x1", lg: "5x1" }}>
            <Text
              as={"span"}
              position={"relative"}
              color={"white"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Papaya
            </Text>
            <br />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Papaya is a recipe storage site. That&apos;s all there is to it
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <HeroButtons />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Tooltip
          label="Photo by Ilyuza Mingazova on Unsplash"
          placement={"left"}
        >
          <Image
            objectFit={"cover"}
            alt={"Repeating pattern of sliced papayas"}
            src="https://images.unsplash.com/photo-1570044803045-d790fc159af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
          ></Image>
        </Tooltip>
      </Flex>
    </Stack>
  );
};
export default Hero;

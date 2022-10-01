import React from "react";
import {
  Flex,
  IconButton,
  useColorMode,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export default function HomeNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      width={"full"}
      height={"4rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"0rem 1rem"}
      backgroundColor={colorMode === "dark" ? "gray.800" : "gray.50"}
    >
      <Flex
        justifyContent={"center"}
        justifySelf={"center"}
        alignItems={"center"}
        className="logo space-x-3"
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          width={"1.5rem"}
          id="hamburger"
          className="cursor-pointer space-y-1"
          display={["inline", "inline", "none"]}
        >
          <Box
            height={"0.15rem"}
            className="ham1 w-full rounded"
            backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
          ></Box>
          <Box
            height={"0.15rem"}
            className="ham2 w-full rounded"
            backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
          ></Box>
          <Box
            height={"0.15rem"}
            className="ham3 w-full rounded"
            backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
          ></Box>
        </Flex>
        <Image src="../favicon.ico" alt="logo" className="h-7 w-7" display={["none", "none", "inline"]} />
        <Text className="logoname text-xl" display={["none", "none", "inline"]}>Inshorts Clone</Text>
      </Flex>

      <Flex className="space-x-3">
        <Text
          className="CategoryHeading text-2xl font-semibold"
          display={["none", "none", "inline"]}
        >
          All News
        </Text>
        <Image src="../favicon.ico" alt="logo" className="h-7 w-7" display={["inline", "inline", "none"]}/>
        <Text className="logoname text-xl" display={["inline", "inline", "none"]}>Inshorts Clone</Text>
      </Flex>

      <Flex className="space-x-2 items-center">
        <Flex
          className="languageToggle rounded-md p-1"
          display={["none", "none", "flex"]}
          backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
        >
          <Box
            className="english px-2 py-1 rounded"
            backgroundColor={colorMode === "dark" ? "gray.600" : "gray.300"}
          >
            <Text>English</Text>
          </Box>
          <Box
            className="hindi px-2 py-1"
            backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
          >
            <Text>Hindi</Text>
          </Box>
        </Flex>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </Flex>
    </Flex>
  );
}

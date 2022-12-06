import React, { useState } from "react";
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
  const [hamstyle1, togglehamstyle1] = useState("w-full rounded");
  const [hamstyle2, togglehamstyle2] = useState("w-full rounded");
  const [hamstyle3, togglehamstyle3] = useState("w-full rounded");
  let isnavopen = false;
  const toggleNavbar = () => {
    if (isnavopen) {
      togglehamstyle1("w-full rounded transition-all duration-500 ease-in-out");
      togglehamstyle2("w-full rounded transition-all duration-500 ease-in-out");
      togglehamstyle3("w-full rounded transition-all duration-500 ease-in-out");
      isnavopen = false;
    } else {
      togglehamstyle1(
        "w-full rounded rotate-45 translate-y-[6px] transition-all duration-500 ease-in-out"
      );
      togglehamstyle2("w-full rounded opacity-0");
      togglehamstyle3(
        "w-full rounded -rotate-45 translate-y-[-6px] transition-all duration-500 ease-in-out"
      );
      isnavopen = true;
    }
  };
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
          onClick={toggleNavbar}
        >
          <Box
            height={"0.15rem"}
            className={hamstyle1}
            transform={""}
            backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
          ></Box>
          <Box
            height={"0.15rem"}
            className={hamstyle2}
            backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
          ></Box>
          <Box
            height={"0.15rem"}
            className={hamstyle3}
            backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
          ></Box>
        </Flex>
        <Image
          src="../favicon.ico"
          alt="logo"
          className="h-7 w-7"
          display={["none", "none", "inline"]}
        />
        <Text className="logoname text-xl" display={["none", "none", "inline"]}>
          Inshorts Clone
        </Text>
      </Flex>

      <Flex className="space-x-3">
        <Text
          className="CategoryHeading text-2xl font-semibold"
          display={["none", "none", "inline"]}
        >
          All News
        </Text>
        <Image
          src="../favicon.ico"
          alt="logo"
          className="h-7 w-7"
          display={["inline", "inline", "none"]}
        />
        <Text
          className="logoname text-xl"
          display={["inline", "inline", "none"]}
        >
          Inshorts Clone
        </Text>
      </Flex>

      <Flex className="space-x-2 items-center">
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        />
      </Flex>
    </Flex>
  );
}

import React from "react";
import { Flex, IconButton, Box, Text, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Component } from "react";

class HeadNav extends Component {
  render() {
    let { isNavOpen, colorMode } = this.props;

    return (
      <Flex
        width={"full"}
        height={"4rem"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0rem 1rem"}
        position={"fixed"}
        backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
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
            onClick={() => {
              this.props.toggleNavbar(!isNavOpen);
            }}
          >
            <Box
              height={"0.15rem"}
              className={
                isNavOpen
                  ? "w-full rounded rotate-45 translate-y-[6px] transition-all duration-500 ease-in-out"
                  : "w-full rounded transition-all duration-500 ease-in-out"
              }
              backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
            ></Box>
            <Box
              height={"0.15rem"}
              className={
                isNavOpen
                  ? "w-full rounded opacity-0"
                  : "w-full rounded transition-all duration-500 ease-in-out"
              }
              backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
            ></Box>
            <Box
              height={"0.15rem"}
              className={
                isNavOpen
                  ? "w-full rounded -rotate-45 translate-y-[-6px] transition-all duration-500 ease-in-out"
                  : "w-full rounded transition-all duration-500 ease-in-out"
              }
              backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
            ></Box>
          </Flex>
          <Image
            src="../favicon.ico"
            alt="logo"
            className="h-7 w-7"
            display={["none", "none", "inline"]}
          />
          <Text
            className="logoname text-xl"
            display={["none", "none", "inline"]}
            textColor={colorMode === "dark" ? "white" : "gray.900"}
          >
            NewsHub
          </Text>
        </Flex>

        <Flex className="space-x-3">
          <Text
            className="CategoryHeading text-2xl font-semibold"
            display={["none", "none", "inline"]}
            textColor={colorMode === "dark" ? "white" : "gray.900"}
          >
            {String(this.props.category).substring(0, 1).toUpperCase() +
              "" +
              String(this.props.category).substring(1)}
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
            textColor={colorMode === "dark" ? "white" : "gray.900"}
          >
            NewsHub
          </Text>
        </Flex>
        <IconButton
          borderRadius={"100%"}
          onClick={() => {
            this.props.toggleColorMode(colorMode === "dark" ? "light" : "dark");
          }}
          textColor={colorMode === "dark" ? "white" : "gray.900"}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
        />
      </Flex>
    );
  }
}
export default HeadNav;

import React, { useState } from "react";
import "./App.css";
import NewsSection from "./components/NewsSection";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  Flex,
  IconButton,
  useColorMode,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Navbar from "./components/Navbar";
import HomeNav from "./components/HomeNav";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isnavopen, togglenav] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [language, toggleLanguage] = useState(false);
  const toggleNavbar = () => {
    togglenav(!isnavopen);
  };
  return (
    <Flex width={["full"]} flexDirection={"column"} className="App">
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
              className={
                isnavopen
                  ? "w-full rounded rotate-45 translate-y-[6px] transition-all duration-500 ease-in-out"
                  : "w-full rounded transition-all duration-500 ease-in-out"
              }
              backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
            ></Box>
            <Box
              height={"0.15rem"}
              className={
                isnavopen
                  ? "w-full rounded opacity-0"
                  : "w-full rounded transition-all duration-500 ease-in-out"
              }
              backgroundColor={colorMode === "dark" ? "gray.50" : "gray.800"}
            ></Box>
            <Box
              height={"0.15rem"}
              className={isnavopen
                ? "w-full rounded -rotate-45 translate-y-[-6px] transition-all duration-500 ease-in-out"
                : "w-full rounded transition-all duration-500 ease-in-out"}
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
          >
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
      <Flex width={"full"} height={"full"}>
        <Flex
          width={"15%"}
          minWidth={"max-content"}
          flexDirection={"column"}
          className={isnavopen ? "navbar shadow space-y-4 pt-3 h-full md:right-0 md:relative right-auto absolute z-auto  transition-all duration-500 ease-in-out":"navbar h-full shadow space-y-4 pt-3 absolute right-full md:relative md:right-0 transition-all duration-500 ease-in-out"}
          backgroundColor={colorMode === "dark" ? "gray.800" : "gray.50"}
        >
          <Flex justifyContent={"center"}>
            <Flex
              className="languageToggle rounded-md p-1 z-0 w-[8.5rem]"
              backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
              onClick={() => toggleLanguage(!language)}
            >
              <Box className="english px-2 py-1 rounded cursor-pointer">
                <Text>English</Text>
              </Box>
              <Box className="hindi px-2 py-1 hover:cursor-pointer">
                <Text>Hindi</Text>
              </Box>
              <Box
                className="background absolute w-16 h-8 rounded z-[-1]"
                backgroundColor={colorMode === "dark" ? "gray.600" : "gray.300"}
                marginLeft={language ? "4rem" : "0rem"}
              ></Box>
            </Flex>
          </Flex>
          <Flex
            className="heading justify-start px-4 py-2 items-center cursor-pointer space-x-2"
            onClick={() => setIsClosed(!isClosed)}
          >
            <Text className="heading text-2xl font-semibold ">Categories</Text>
            <Box className="uparrow" display={isClosed ? "none" : "inline"}>
              <IoIosArrowDown className="w-7 h-7" />
            </Box>
            <Box className="downarrow" display={isClosed ? "inline" : "none"}>
              <IoIosArrowUp className="w-7 h-7" />
            </Box>
          </Flex>
          <Box
            className="categories flex overflow-hidden"
            flexDirection={"column"}
            height={isClosed ? "max-content" : "0px"}
          >
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category1 rounded mx-2"
            >
              <span>All News</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category2 rounded mx-2"
            >
              <span>India</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category3 rounded mx-2"
            >
              <span>Science</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category4 rounded mx-2"
            >
              <span>Technology</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category5 rounded mx-2"
            >
              <span>Start Up</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category6 rounded mx-2"
            >
              <span>Business</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category7 rounded mx-2"
            >
              <span>Sports</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category8 rounded mx-2"
            >
              <span>World</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category9 rounded mx-2"
            >
              <span>Miscellaneous</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category1 rounded2 mx-2"
            >
              <span>Hatke</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category1 rounded2 mx-2"
            >
              <span>Automobile</span>
            </Flex>
            <Flex
              justifyContent={"start"}
              _hover={{
                backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
              }}
              padding={"0.5rem 1rem"}
              className="category1 rounded2 mx-2"
            >
              <span>Entertainment</span>
            </Flex>
          </Box>
        </Flex>
        <NewsSection />
      </Flex>
    </Flex>
  );
}

export default App;

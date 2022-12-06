import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Navbar() {
  const { colorMode } = useColorMode();
  const [isClosed, setIsClosed] = useState(false);
  const [ language , toggleLanguage] = useState(false)

  return (
    <Flex
      width={"15%"}
      minWidth={"max-content"}
      flexDirection={"column"}
      className="navbar shadow space-y-4 pt-3 absolute right-full md:relative md:right-0"
      backgroundColor={colorMode === "dark" ? "gray.800" : "gray.50"}
    >
      <Flex justifyContent={"center"}>
        <Flex
          className="languageToggle rounded-md p-1 z-0 w-[8.5rem]"
          backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
          onClick={() => toggleLanguage(!language)}>
          <Box
            className="english px-2 py-1 rounded cursor-pointer"
          >
            <Text>English</Text>
          </Box>
          <Box
            className="hindi px-2 py-1 hover:cursor-pointer"
          >
            <Text>Hindi</Text>
          </Box>
          <Box className="background absolute w-16 h-8 rounded z-[-1]" 
            backgroundColor={colorMode === "dark" ? "gray.600" : "gray.300"}
            marginLeft={language ? "4rem" : "0rem"}></Box>
        </Flex>
      </Flex>
      <Flex
        className="heading justify-start px-4 py-2 items-center cursor-pointer space-x-2"
        onClick={() => setIsClosed(!isClosed)}
      >
        <Text className="heading text-2xl font-semibold ">Categories</Text>
        <Box className="uparrow" display={isClosed ? "none" : "inline"}>
        <IoIosArrowDown className="w-7 h-7"/>
        </Box>
        <Box className="downarrow" display={isClosed ? "inline" : "none"}>
        <IoIosArrowUp className="w-7 h-7"/>
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
  );
}

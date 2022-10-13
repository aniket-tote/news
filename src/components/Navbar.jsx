import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { Flex, Box, useColorMode } from "@chakra-ui/react";

export default function Navbar() {
  const { colorMode } = useColorMode();
  const [showcategory, toggleshowcategory] = useState(true);
  const toggleshowcategorymode = () => {
    if (showcategory === true) {
      toggleshowcategory(false);
    } else {
      toggleshowcategory(true);
    }
  };
  return (
    <Box
      width={"20%"}
      className="navbar shadow absolute hidden right-full md:right-0 md:flex flex-col md:relative"
      backgroundColor={colorMode === "dark" ? "gray.800" : "gray.50"}
    >
      <Flex justifyContent={"center"} display={["inline", "inline", "none"]}>
        <Flex
          className="languageToggle rounded-md p-1"
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
      </Flex>
      <Flex className="heading justify-start px-4 py-2 items-center cursor-pointer">
        <Text
          className="heading text-2xl font-semibold"
          onClick={toggleshowcategorymode}
        >
          Categories
        </Text>
        <BiDownArrowAlt
          className="mx-2 w-6 h-6"
          onClick={toggleshowcategorymode}
          // display={showcategory ? "none" : "inline"}
          display={"none"}
        />
        <BiUpArrowAlt
          className="mx-2 w-6 h-6"
          onClick={toggleshowcategorymode}
          // display={showcategory ? "inline" : "none"}
        />
      </Flex>
      <Flex className="categories" flexDirection={"column"}>
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
      </Flex>
    </Box>
  );
}

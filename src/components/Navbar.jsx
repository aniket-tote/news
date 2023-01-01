import React, { Component } from "react";
import { Text } from "@chakra-ui/react";
import { Flex, Box } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIsOpen: true,
      language: false,
    };
  }

  render() {
    let { isnavopen, colorMode } = this.props;
    return (
      <Flex
        width={"15%"}
        minWidth={"max-content"}
        flexDirection={"column"}
        className={
          isnavopen
            ? "navbar space-y-4 pt-3 h-full md:right-0 md:relative right-auto absolute z-auto  transition-all duration-500 ease-in-out"
            : "navbar h-full space-y-4 pt-3 absolute right-full md:relative md:right-0 transition-all duration-500 ease-in-out"
        }
        backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
      >
        <Flex justifyContent={"center"}>
          <Flex
            className="languageToggle rounded-md p-1 z-0 w-[8.5rem]"
            backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
            onClick={() => this.setState({ language: !this.state.language })}
          >
            <Box className="english px-2 py-1 rounded cursor-pointer">
              <Text textColor={colorMode === "dark" ? "white" : "gray.800"}>
                English
              </Text>
            </Box>
            <Box className="hindi px-2 py-1 hover:cursor-pointer">
              <Text textColor={colorMode === "dark" ? "white" : "gray.800"}>
                Hindi
              </Text>
            </Box>
            <Box
              className="background absolute w-16 h-8 rounded z-[-1]"
              backgroundColor={colorMode === "dark" ? "gray.600" : "gray.300"}
              marginLeft={this.state.language ? "4rem" : "0rem"}
            ></Box>
          </Flex>
        </Flex>
        <Flex
          className="heading justify-start px-4 py-2 items-center cursor-pointer space-x-2"
          onClick={() =>
            this.setState({ categoryIsOpen: !this.state.categoryIsOpen })
          }
        >
          <Text
            textColor={colorMode === "dark" ? "white" : "gray.800"}
            className="heading text-2xl font-semibold "
          >
            Categories
          </Text>
          <Box
            className="uparrow"
            display={this.state.categoryIsOpen ? "none" : "inline"}
          >
            <IoIosArrowDown className="w-7 h-7" />
          </Box>
          <Box
            className="downarrow"
            display={this.state.categoryIsOpen ? "inline" : "none"}
          >
            <IoIosArrowUp className="w-7 h-7" />
          </Box>
        </Flex>
        <Box
          className="categories flex overflow-hidden"
          flexDirection={"column"}
          height={this.state.categoryIsOpen ? "max-content" : "0px"}
        >
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category1 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              All News
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category2 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              India
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category3 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Science
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category4 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Technology
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category5 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Start Up
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category6 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Business
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category7 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Sports
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category8 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              World
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category9 rounded mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Miscellaneous
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category1 rounded2 mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Hatke
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category1 rounded2 mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Automobile
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category1 rounded2 mx-2"
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Entertainment
            </Text>
          </Flex>
        </Box>
      </Flex>
    );
  }
}
export default Navbar;

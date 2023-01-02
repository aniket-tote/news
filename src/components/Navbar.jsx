import React, { Component } from "react";
import { IconButton, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Flex, Box } from "@chakra-ui/react";

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
            ? "navbar space-y-2 pt-3 h-full md:right-0 md:relative right-auto absolute z-auto transition-all duration-500 ease-in-out"
            : "navbar h-full space-y-2 pt-3 absolute right-full md:relative md:right-0 transition-all duration-500 ease-in-out"
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
          <IconButton
            backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
            textColor={colorMode === "dark" ? "white" : "gray.800"}
            borderRadius={"full"}
            fontSize={"3xl"}
            icon={
              this.state.categoryIsOpen ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )
            }
          />
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
            className="category1 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("general")}
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              General
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category2 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("technology")}
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
            className="category3 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("science")}
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
            className="category4 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("health")}
          >
            <Text textColor={colorMode === "dark" ? "white" : "gray.900"}>
              Health
            </Text>
          </Flex>
          <Flex
            justifyContent={"start"}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.200",
            }}
            padding={"0.5rem 1rem"}
            className="category5 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("business")}
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
            className="category6 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("sports")}
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
            className="category7 rounded mx-2 cursor-pointer"
            onClick={() => this.props.toggleCategory("entertainment")}
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

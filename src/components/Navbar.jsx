import React, { Component } from "react";
import { IconButton, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIsOpen: true,
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
            ? "navbar space-y-2 pt-3 h-full md:right-0 md:relative right-auto absolute transition-all duration-500 ease-in-out"
            : "navbar h-full space-y-2 pt-3 absolute right-full md:relative md:right-0 transition-all duration-500 ease-in-out"
        }
        backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
      >
        <Flex justifyContent={"center"}>
          <Flex
            className="languageToggle rounded-md p-1 z-0 w-[8.5rem]"
            backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
            onClick={() =>
              this.props.toggleCountry(this.props.country === "in" ? "" : "in")
            }
          >
            <Box className="english px-2 py-1 rounded cursor-pointer">
              <Text textColor={colorMode === "dark" ? "white" : "gray.800"}>
                All world
              </Text>
            </Box>
            <Box className="hindi px-2 py-1 hover:cursor-pointer">
              <Text textColor={colorMode === "dark" ? "white" : "gray.800"}>
                India
              </Text>
            </Box>
            <Box
              className="background absolute h-8 rounded z-[-1]"
              width={this.props.country === "in" ? "3rem" : "4.8rem"}
              backgroundColor={colorMode === "dark" ? "gray.600" : "gray.300"}
              marginLeft={this.props.country ? "5rem" : "0rem"}
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
            <Link
              to="/"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              General
            </Link>
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
            <Link
              to="/technology"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              Technology
            </Link>
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
            <Link
              to="/science"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              Science
            </Link>
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
            <Link
              to="/health"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              Health
            </Link>
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
            <Link
              to="/business"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              Business
            </Link>
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
            <Link
              to="/sports"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              Sports
            </Link>
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
            <Link
              to="/entertainment"
              className={colorMode === "dark" ? "text-white" : "text-gray-900"}
            >
              Entertainment
            </Link>
          </Flex>
        </Box>
      </Flex>
    );
  }
}
export default Navbar;

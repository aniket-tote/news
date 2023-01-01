import React, { Component } from "react";
import "./App.css";
import NewsSection from "./components/NewsSection";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeadNav from "./components/HeadNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorMode: "dark",
      isNavOpen: false,
    };
  }

  toggleNavbar = (param) => {
    this.setState({ isNavOpen: param });
  };

  toggleColorMode = (param) => {
    this.setState({ colorMode: param });
    console.log(this.state.colorMode);
  };

  render() {
    return (
      <Flex
        width={["full"]}
        flexDirection={"column"}
        className="App"
        backgroundColor={
          this.state.colorMode === "dark" ? "gray.800" : "gray.100"
        }
      >
        <HeadNav
          colorMode={this.state.colorMode}
          isNavOpen={this.state.isNavOpen}
          toggleNavbar={this.toggleNavbar}
          toggleColorMode={this.toggleColorMode}
        />
        <Flex width={"full"} height={"full"}>
          <Navbar
            isnavopen={this.state.isNavOpen}
            colorMode={this.state.colorMode}
          />
          <NewsSection colorMode={this.state.colorMode} />
        </Flex>
      </Flex>
    );
  }
}

export default App;

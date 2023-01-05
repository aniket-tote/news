import React, { Component } from "react";
import "./App.css";
import NewsSection from "./components/NewsSection";
import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HeadNav from "./components/HeadNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorMode: "dark",
      isNavOpen: false,
      category: "general",
    };

  }

  toggleNavbar = (param) => {
    this.setState({ isNavOpen: param });
  };

  toggleColorMode = (param) => {
    this.setState({ colorMode: param });
  };

  toggleCategory = (param) => {
    this.setState({ category: param });
  };

  toggleCountry = (param) => {
    this.setState({ country: param });
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
          category={this.state.category}
          toggleColorMode={this.toggleColorMode}
        />
        <Flex width={"full"} height={"full"}>
          <Router>
            <Navbar
              isnavopen={this.state.isNavOpen}
              colorMode={this.state.colorMode}
              category={this.state.category}
              toggleCategory={this.toggleCategory}
              country={this.state.country}
              toggleCountry={this.toggleCountry}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <NewsSection
                    key={"general"}
                    colorMode={this.state.colorMode}
                    category={"general"}
                    country={this.state.country}
                  />
                }
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <NewsSection
                    key={"technology"}
                    colorMode={this.state.colorMode}
                    category={"technology"}
                    country={this.state.country}
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <NewsSection
                    key={"science"}
                    colorMode={this.state.colorMode}
                    category={"science"}
                    country={this.state.country}
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <NewsSection
                    key={"health"}
                    colorMode={this.state.colorMode}
                    category={"health"}
                    country={this.state.country}
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <NewsSection
                    key={"business"}
                    colorMode={this.state.colorMode}
                    category={"business"}
                    country={this.state.country}
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <NewsSection
                    key={"sports"}
                    colorMode={this.state.colorMode}
                    category={"sports"}
                    country={this.state.country}
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <NewsSection
                    key={"entertainment"}
                    colorMode={this.state.colorMode}
                    category={"entertainment"}
                    country={this.state.country}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </Flex>
      </Flex>
    );
  }
}

export default App;

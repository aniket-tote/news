import { Flex } from '@chakra-ui/react'
import React, { useState } from "react";
import "./App.css";
import HomeNav from "./components/HomeNav";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";

function App() {

  return (
    <Flex width={["full"]} flexDirection={"column"} className="App">
      <HomeNav/>
      <Flex width={"full"} height={"full"}>
        <Navbar />
        <NewsSection />
      </Flex>
    </Flex>
  );
}

export default App;

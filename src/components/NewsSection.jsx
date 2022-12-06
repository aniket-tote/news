import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";

export default function NewsSection() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      width={["100%","100%","85%"]}
      className="z-[-1] space-y-5 md:space-x-5"
      justifyContent={"center"}
      backgroundColor={colorMode === "dark" ? "gray.900" : "white"}
      flexWrap={"wrap"}
    >
      <Flex
        className="newsItem1 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 mt-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem2 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem3 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem4 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem5 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem6 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem7 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem8 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem9 max-w-[90%] md:max-w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem1 max-w-[90%] md:max-w-[45%] h-max0 rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ex modi sed. Dolore voluptate a totam deserunt iure mollitia facilis hic
        fugiat veritatis doloribus, laudantium tempore cumque laboriosam! Cum
        neque tempore aut iusto assumenda.
      </Flex>
    </Flex>
  );
}

import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";

export default function NewsSection() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      width={"90%"}
      className="z-[-1] space-x-5 space-y-5"
      justifyContent={"center"}
      backgroundColor={colorMode === "dark" ? "gray.900" : "white"}
      flexWrap={"wrap"}
    >
      <Flex
        className="newsItem1 w-4/5 md:w-[45%] h-max ml-5 mt-5 rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum numquam
        deleniti libero tenetur ea sint tempora ipsum vero eveniet laborum sed
        quo nisi aliquam animi, natus praesentium, eius recusandae doloremque
        veniam dolorem accusantium reiciendis.
      </Flex>
      <Flex
        className="newsItem2 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem3 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem4 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem5 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem6 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem7 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem8 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem9 w-4/5 md:w-[45%] h-max rounded-lg p-5 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, eum
        ipsam. Deleniti voluptatem facere omnis fugit incidunt inventore saepe
        nulla, dolorum esse magni beatae at autem excepturi quidem odit laborum
        nisi? Tenetur, perspiciatis corrupti.
      </Flex>
      <Flex
        className="newsItem1 w-4/5 md:w-[45%] h-max0 rounded-lg p-5 shadow-lg"
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

import React from "react";
import { Flex, useColorMode } from "@chakra-ui/react";

export default function NewsSection() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      width={"auto"}
      className="z-[-1]"
      backgroundColor={colorMode === "dark" ? "gray.900" : "white"}
    >
      News Here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
      dolorem dicta distinctio quod perspiciatis commodi error facilis officiis
      suscipit assumenda illo sit fuga rem velit doloremque ab eum et aliquid
      alias harum delectus, nesciunt accusantium necessitatibus. Aliquam porro
      sapiente ipsum, fugiat illo, ad quis commodi nulla ducimus ipsam eaque
      aliquid consequatur sit illum tempore. Dolorum labore dicta fugit itaque a
      corrupti, et neque velit, quas possimus eligendi repellat adipisci optio,
      aperiam commodi laboriosam doloribus sed voluptatem provident. Deserunt
      reiciendis obcaecati repellendus incidunt dolore aspernatur repellat nulla
      perferendis, non ratione odio voluptatem optio, error corporis quo, saepe
      minus accusantium. Quaerat, expedita!
    </Flex>
  );
}

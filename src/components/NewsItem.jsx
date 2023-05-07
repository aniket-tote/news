import { Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Component } from "react";

class NewsItem extends Component {
  render() {
    let {
      colorMode,
      urlToImage,
      title,
      author,
      publishedAt,
      description,
      url,
      sourceName,
    } = this.props;
    return (
      <Flex
        className="newsItem1 lg:w-[69%] h-max rounded-lg p-2 mt-2 ml-2 mr-2 shadow-lg"
        backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
        direction={["column", "column", "row"]}
      >
        <Image
          src={
            urlToImage
              ? urlToImage
              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          }
          className="h-56 rounded"
        />
        <Flex
          className="info space-y-2 md:ml-2 mt-2 md:mt-0"
          direction={"column"}
        >
          <Text
            textColor={colorMode === "dark" ? "white" : "gray.900"}
            className="title text-lg font-semibold"
          >
            {title}
          </Text>
          <Text textColor={"gray.500"} className="authorandtime">
            By {author ? author : "Anonymous"} /{" "}
            {new Date(publishedAt).toGMTString()}
          </Text>
          <Text
            textColor={colorMode === "dark" ? "white" : "gray.900"}
            className="content"
          >
            {description}
          </Text>
          <Link target={"_blank"} color={"blue.600"} href={url}>
            read more at {sourceName ? sourceName : "author"}
          </Link>
        </Flex>
      </Flex>
    );
  }
}

export default NewsItem;

import React from "react";
import { Flex } from "@chakra-ui/react";
import NewsItem from "./NewsItem";
import { Component } from "react";

class NewsSection extends Component {
  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=9beb73b8c5354e63ac440efa04f1415e";
    let fetcheddata = await fetch(url);
    let data = await fetcheddata.json();
    console.log(data);
    this.setState({
      articles: data.articles,
    });
  }

  render() {
    let { colorMode } = this.props;
    return (
      <Flex
        width={["100%", "100%", "85%"]}
        justifyContent={"center"}
        backgroundColor={colorMode === "dark" ? "gray.900" : "gray.100"}
        flexWrap={"wrap"}
      >
        {this.state.articles
          ? this.state.articles.map((element) => {
              return (
                <NewsItem
                  colorMode={this.props.colorMode}
                  key={element.urlToImage}
                  title={element.title}
                  description={element.description}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  url={element.url}
                  urlToImage={element.urlToImage}
                  sourceName={element.source.name}
                />
              );
            })
          : console.log("not found")}
      </Flex>
    );
  }
}

export default NewsSection;

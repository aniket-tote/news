import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import NewsItem from "./NewsItem";
import { Component } from "react";
import Loading from "./Loading";

class NewsSection extends Component {
  static defaultProps = {
    country: "in",
    category:"general"
  };
  
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&apiKey=9beb73b8c5354e63ac440efa04f1415e&category=${this.props.category}`;
    console.log(this.props.category);
    this.setState({
      loading: true,
    });
    let fetcheddata = await fetch(url);
    let data = await fetcheddata.json();
    this.setState({
      articles: data.articles,
      loading: false,
    });
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${
      this.props.country
    }&apiKey=9beb73b8c5354e63ac440efa04f1415e&page=${this.state.page - 1}`;
    this.setState({
      loading: true,
    });
    let fetcheddata = await fetch(url);
    let data = await fetcheddata.json();
    this.setState({
      articles: data.articles,
      page: this.state.page - 1,
      loading: false,
    });
    console.log("previous");
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&country=${
      this.props.country
    }&apiKey=9beb73b8c5354e63ac440efa04f1415e&page=${this.state.page + 1}`;
    this.setState({
      loading: true,
    });
    let fetcheddata = await fetch(url);
    let data = await fetcheddata.json();
    this.setState({
      articles: data.articles,
      page: this.state.page + 1,
      loading: false,
    });
    console.log("next");
  };

  render() {
    let { colorMode } = this.props;
    return (
      <Flex
        width={["100%", "100%", "85%"]}
        flexDirection={"column"}
        minHeight={"100vh"}
        alignItems={"center"}
        backgroundColor={colorMode === "dark" ? "gray.900" : "gray.100"}
      >
        {this.state.loading && <Loading />}
        <Flex
          className="newsContainer"
          flexWrap={"wrap"}
          width={"full"}
          justifyContent={"center"}
        >
          {!this.state.loading && (this.state.articles
            ? this.state.articles.map((element) => {
                return (
                  <NewsItem
                    colorMode={this.props.colorMode}
                    key={element.url}
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
            : console.log("articles not found"))}
        </Flex>
        <Flex
          position={["relative", "relative", "absolute"]}
          justifyContent={"space-between"}
          width={["100%", "85%"]}
          padding={"5"}
        >
          <Button
            disabled={this.state.page <= 1}
            className="px-4 py-2 rounded disabled:text-gray-600"
            background={"transparent  "}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.300",
            }}
            textColor={colorMode === "dark" ? "white" : "gray.800"}
            onClick={this.handlePrevious}
          >
            <ChevronLeftIcon /> Previous
          </Button>
          <Button
            disabled={this.state.page > 1}
            className="px-4 py-2 rounded disabled:text-gray-600"
            background={"transparent  "}
            _hover={{
              backgroundColor: colorMode === "dark" ? "gray.700" : "gray.300",
            }}
            textColor={colorMode === "dark" ? "white" : "gray.800"}
            onClick={this.handleNext}
          >
            Next <ChevronRightIcon />
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default NewsSection;

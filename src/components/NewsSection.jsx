import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsSection = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [country, setCountry] = useState("in");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=20&country=${props.country}&apiKey=9beb73b8c5354e63ac440efa04f1415e&category=${props.category}&page=${page}`;
    let fetcheddata = await fetch(url);
    props.setProgress(30);
    let data = await fetcheddata.json();
    props.setProgress(50);
    setArticles(data.articles);
    setLoading(false);
    setTotalResults(data.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=20&country=${
      props.country
    }&apiKey=9beb73b8c5354e63ac440efa04f1415e&category=${props.category}&page=${
      page + 1
    }`;
    setPage(page + 1);
    let fetcheddata = await fetch(url);
    let data = await fetcheddata.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    props.setProgress(100);
  };

  return (
    <Flex
      width={["100%", "100%", "85%"]}
      flexDirection={"column"}
      minHeight={"100vh"}
      alignItems={"center"}
      backgroundColor={props.colorMode === "dark" ? "gray.900" : "gray.100"}
    >
      {loading && <Loading />}
      <Flex
        className="newsContainer"
        flexWrap={"wrap"}
        width={"full"}
        justifyContent={"center"}
      >
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {articles.map((element) => {
            return (
              <NewsItem
                colorMode={props.colorMode}
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
          })}
        </InfiniteScroll>
      </Flex>
    </Flex>
  );
};

export default NewsSection;

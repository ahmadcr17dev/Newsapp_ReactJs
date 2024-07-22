import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: 100px;
  padding: 10px 30px 10px 30px;
  margin-bottom: 100px;
  font-family: "poppins", sans-serif;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  width: 30%;
  overflow-y: scroll;
  height: 100%;
  padding: 20px;
`;

const RightSection = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
`;

const NewsItem = styled.div`
  margin-bottom: 0px;
`;

const NewsTitle = styled.h3`
  background-color: #343a40;
  color: #fff;
  padding: 10px;
  font-size: 19px !important;
`;

const NewsDescription = styled.p`
  padding: 10px;
`;

const NewsContent = styled.div`
  height: fit-content;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Linka = styled.a`
    color: red;
    text-decoration: none;
    padding-left: 15px;
    margin-top: -19px;
`;

const Desclink = styled.div`
    background-color: rgba(0,0,0,0.05);
    margin-top: -10px;
`;

const Scrollnews = () => {

    const [articles, setarticles] = useState([]);
    const [Error, setError] = useState(null);

    useEffect(() => {
        const fetchnews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84b61c6b08fa4d3c9d0d89add8c3002d');
                const data = await response.json();
                if (response.ok) {
                    setarticles(data.articles);
                }
                else {
                    throw new Error(data.message);
                }
            } catch (error) {
                setError(error.message);
            }
        };
        fetchnews()
    },);

    const formattitle = (title) => {
        if (!title) {
            return "Rolling Stone News Today....";
        }
        const words = title.split(" ");
        return words.slice(0, 15).join(" ");
    }

    const formatdesc = (desc) => {
        if (!desc) {
            return "Welcome to Rolling Stone where you can read best articles....";
        }
        const words = desc.split(" ");
        return words.slice(0, 40).join(" ");
    }

    const formattitle1 = (title) => {
        if (!title) {
            return "Rolling Stone News Today....";
        }
        const words = title.split(" ");
        return words.slice(0, 7).join(" ");
    }

    const formatdesc1 = (desc) => {
        if (!desc) {
            return "Welcome to Rolling Stone where you can read best articles....";
        }
        const words = desc.split(" ");
        return words.slice(0, 15).join(" ");
    }

    return (
        <>
            <Container>
                <Row>
                    <RightSection>
                        {articles.slice(0, 1).map((article, index) => {
                            return <NewsContent key={index}>
                                <Image src={article.urlToImage ? article.urlToImage : "https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg"} alt="..image" />
                                <h2>{formattitle(article.title)}</h2>
                                <p>{formatdesc(article.desc)}</p>
                                <a className="text-decoration-none" href={article.url}>Read More...</a>
                            </NewsContent>
                        })}
                    </RightSection>
                    <LeftSection>
                        {articles.map((article1, index1) => {
                            return <NewsContent key={index1}>
                                <NewsItem>
                                    <NewsTitle>{formattitle1(article1.title)}</NewsTitle>
                                    <Desclink>
                                        <NewsDescription>{formatdesc1(article1.title)}</NewsDescription>
                                        <Linka href={article1.url}>Read More...</Linka>
                                    </Desclink>
                                </NewsItem>
                            </NewsContent>
                        })}
                    </LeftSection>
                </Row>
            </Container>
        </>
    );
}

export default Scrollnews;
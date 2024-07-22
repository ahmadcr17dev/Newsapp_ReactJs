import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Newshome = () => {

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
        return words.slice(0, 7).join(" ");
    }

    const formatdesc = (desc) => {
        if (!desc) {
            return "Welcome to Rolling Stone where you can read best articles....";
        }
        const words = desc.split(" ");
        return words.slice(0, 15).join(" ");
    }

    const formatauthor = (author) => {
        if (!author) {
            return "Rolling Stone";
        }
        const words = author.split(" ");
        return words.slice(0, 3).join(" ");
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatsource = (source) => {
        if (!source) {
            return "Rolling Stone";
        }
        return source;
    }

    return (
        <>
            <StyledNewshome className="container">
                <h3 className="text-center">USA Headlines Today</h3>
                <div className="row">
                    {articles.slice(0, 3).map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card-mb-4">
                                <img src={article.urlToImage ? article.urlToImage : "https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg"} alt="..image" />
                                <h5 className="card-text">{formattitle(article.title)}</h5>
                                <p className="card-text">{formatdesc(article.description)}</p>
                                <p className="card-text"><strong>Author: </strong>{formatauthor(article.author)}</p>
                                <p className="card-text"><strong>Published Date: </strong>{formatDate(article.publishedAt)}</p>
                                <p className="card-text"><strong>Source: </strong>{formatsource(article.source.name)}</p>
                                <button className="btn btn-primary" href={article.url}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </StyledNewshome>
        </>
    );
}

const StyledNewshome = styled.div`
    width: 100%;
    margin-top: 100px;
    img {
        width: 100%;
        height: 300px;
    }
    h3 {
        font-size: 40px;
        font-family: "poppins", sans-serif;
        margin-bottom: 30px;
        font-weight: 550;
    }
    h5 {
        font-family: "poppins", sans-serif;
        font-size: 1.3rem;
        margin-top: 15px;
        font-weight: 510;
    }
`;

export default Newshome;
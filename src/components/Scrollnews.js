import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Scrollnews = (props) => {

    const [articles, setarticles] = useState([]);
    const [Error, setError] = useState(null);

    useEffect(() => {
        const fetchnews = async () => {
            try {
                const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-06-18&sortBy=publishedAt&apiKey=84b61c6b08fa4d3c9d0d89add8c3002d");
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
            return "US News Today";
        }
        const words = title.split(" ");
        return words.slice(0, 10).join(" ");
    }

    const formatdesc = (desc) => {
        if (!desc) {
            return "Welcome to Rolling Stone where you can read best articles about US";
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


    return (
        <>
            <Styledscroll>
                <div>
                    {articles.slice(0, 1).map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card-mb-4">
                                <img src={article.urlToImage ? article.urlToImage : "https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg"} alt="..image" />
                                <h5 className="card-text">{formattitle(article.title)}</h5>
                                <p className="card-text">{formatdesc(article.description)}</p>
                                <p className="card-text"><strong>Author: </strong>{formatauthor(article.author)}</p>
                                <p className="card-text"><strong>Published Date: </strong>{formatDate(article.publishedAt)}</p>
                                <button className="btn btn-primary" href={article.url}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>

                </div>
            </Styledscroll>
        </>
    );
}

const Styledscroll = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 100px;
    img {
        width: 500px;
        height: 400px;
    }
    h5 {
        font-size: 1.5rem;
    }
`;

export default Scrollnews;
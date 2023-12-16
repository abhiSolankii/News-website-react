import React, { useEffect } from "react";
import "../components/news.css";

const News = (props) => {
  console.log(props);
  return (
    <div className="main-body">
      <div className="card">
        <img src={props.article.urlToImage} className="image" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.article.title}</h4>
          <p className="description">
            {props.article.description?.substring(0, 140)}...
            <a href={props.article.url} target="_blank" className="read-more">
              read more
            </a>
          </p>
        </div>
        <div className="name-publisher">
          <p className="name">Author: {props.article.author} </p>
          <p className="publisher">Publisher:{props.article.source.name} </p>
        </div>
        <p className="date">
          Date: {props.article.publishedAt.substring(0, 10)}{" "}
        </p>
      </div>
    </div>
  );
};

export default News;

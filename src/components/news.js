import React from "react";

const News = (props) => {
  console.log(props);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={props.article.image}
        className="w-full h-48 object-cover"
        alt="News"
      />
      <div className="p-4">
        <h4 className="text-xl font-semibold mb-2">{props.article.title}</h4>
        <p className="text-gray-700 mb-4">
          {props.article.description?.substring(0, 140)}...
          <a
            href={props.article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            read more
          </a>
        </p>
        <div className="text-gray-600 text-sm">
          <p className="mb-1">Author: {props.article.source.name}</p>
          <p className="mb-1">Publisher: {props.article.source.url}</p>
          <p className="mb-1">
            Date: {props.article.publishedAt.substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;

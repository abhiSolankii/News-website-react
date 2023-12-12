import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/news.js";
import Navbar from "./components/navbar.js";

function App() {
  const [query, setQuery] = useState("india");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const URL = `https://newsapi.org/v2/everything?q=${query}&from=2023-12-06&to=2023-12-12&language=en&apiKey=317f41ebc2d7416380140d6192f2c857`;
    fetch(URL)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error occurred ", error);
        setLoading(false);
      });
  }, [query]);
  // console.log(articles);
  if (query === "") {
    setQuery("india");
  }
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Navbar setQuery={setQuery} />
          <div className="main">
            {articles && articles.length > 0 ? (
              articles.map((article) => (
                <News key={article.url} article={article} />
              ))
            ) : (
              <div>No articles to display</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

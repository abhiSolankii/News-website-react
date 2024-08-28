import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/news.js";
import Navbar from "./components/navbar.js";

function App() {
  const [query, setQuery] = useState("sports");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lang, setlang] = useState("en");

  useEffect(() => {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (day === 1) {
      month -= 1;
      if (month === 0) {
        month = 12;
        year -= 1;
      }
      day = new Date(year, month, 0).getDate() - 1;
    } else if (day === 2) {
      month -= 1;
      if (month === 0) {
        month = 12;
        year -= 1;
      }
      day = new Date(year, month, 0).getDate();
    } else {
      day -= 2;
    }

    const formattedDate = `${year}-${month}-${day}`;

    const URL = `https://newsapi.org/v2/everything?q=${query}&from=${formattedDate}&language=${lang}&sortBy=popularity&apiKey=66a98efbcd784ed2b277b477a94cb022`;
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
  }, [query, lang]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setQuery={setQuery} setlang={setlang} />
      <div className="container mx-auto p-4">
        {loading ? (
          <div className="text-center text-xl">Loading...</div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles && articles.length > 0 ? (
              articles.map((article) => (
                <News key={article.url} article={article} />
              ))
            ) : (
              <div className="col-span-full text-center text-lg">
                No articles to display
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

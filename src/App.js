import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/news.js";
import Navbar from "./components/navbar.js";
import axios from "axios";

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
    const date2 = `${year}-${month}-${day}`;

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

    const fetchArticles = async () => {
      // const URL = `http://localhost:4000/api/news?query=${query}&date=${formattedDate}&lang=${lang}`;
      // const URL = `http://localhost:4000/api/news?query=${query}&date=${formattedDate}&lang=${lang}&date2=${date2}`;
      const URL = `https://news-website-react.onrender.com/api/news?query=${query}&lang=${lang}`;

      try {
        const response = await axios.get(URL);
        // console.log(response);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.log("Error occurred ", error);
        setLoading(false);
      }
    };
    fetchArticles();
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

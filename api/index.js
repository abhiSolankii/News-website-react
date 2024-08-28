import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// News API route
app.get("/api/news", async (req, res) => {
  const { query, lang } = req.query;
  const API_KEY = "66a98efbcd784ed2b277b477a94cb022";
  //   const URL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&language=${lang}&sortBy=popularity&apiKey=${API_KEY}`;
  //   const URL = `https://newsdata.io/api/1/archive?apikey=pub_51991b5c046089806049558b1caa6697c7ca5&q=${query}&language=${lang}&from_date=${date}&to_date=${date2}`;

  const URL = `https://gnews.io/api/v4/search?q=${query}&lang=${lang}&country=us&max=10&apikey=79efea3c9e90067ed723b1cbf7b0ea54`;

  try {
    const response = await axios.get(URL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

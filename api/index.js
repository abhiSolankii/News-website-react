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
  const { query, lang, date } = req.query;
  const API_KEY = "66a98efbcd784ed2b277b477a94cb022";
  const URL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&language=${lang}&sortBy=popularity&apiKey=${API_KEY}`;

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

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/api/country/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );

    const countryData = response.data;
    res.json(countryData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

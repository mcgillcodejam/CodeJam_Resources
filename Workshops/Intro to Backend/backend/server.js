const express = require("express");
const app = express();
const animalRoutes = require("./routes/animals");

app.use(express.json()); // Needed to parse JSON bodies from requests
app.use("/animals", animalRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

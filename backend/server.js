require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

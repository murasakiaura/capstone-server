const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const petRescueRoutes = require("./routes/petRescue");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/api/petrescue", petRescueRoutes);

app.get("/", (req, res) => {
  res.send("Adopt an Animal API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

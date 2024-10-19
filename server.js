const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const petRescueRoutes = require("./routes/petRescue");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/petrescue", petRescueRoutes);

app.get("/", (req, res) => {
  res.send("Adopt an Animal API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

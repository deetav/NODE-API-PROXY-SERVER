const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max = 1   
});

app.use(limiter)
app.set('trust proxy', 1)

app.use(express.static('public'))

app.use("/api", require("./routes"));

app.use(cors());

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

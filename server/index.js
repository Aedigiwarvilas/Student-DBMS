const express = require("express");
const connectDb = require("./config/database");
const routes = require("./routes/student-routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
const PORT = 5000;

connectDb();

app.listen(PORT, () => console.log("Server Running at Port " + PORT));

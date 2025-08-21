const express = require("express");
const databaseConnection = require("./database");
const bookRouter = require("./routes/book.routes");
const cors = require("cors");




// database connection
databaseConnection();

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
  


app.use("/book", bookRouter);


app.listen(8000, () => {
  console.log("Port listening on 8000");
});
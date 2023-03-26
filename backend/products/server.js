const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse body requests of content-type - application/json
app.use(express.json());

// parse body requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// let express to use swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Connected with database...");
    // initial();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to kamu-products" });
});

require("./routes/product.routes")(app);

// set port, listen for requests
const PORT = process.env.DB_PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
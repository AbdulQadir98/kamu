const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// let express to use swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const db = require("./models");
const Role = db.role;

db.sequelize.sync()
  .then(() => {
    console.log("Connected with database...");
    // initial();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// to create 2 rows in database
// insert them manually
// function initial() {
//   Role.create({
//     id: 1,
//     name: "customer"
//   });
 
//   Role.create({
//     id: 2,
//     name: "admin"
//   });
// }

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to kamu-users" });
});

require("./routes/user.routes")(app);
require('./routes/auth.routes')(app);

// set port, listen for requests
const PORT = process.env.DB_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
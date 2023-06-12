const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();


var corsOptions = {
  origin : "http://localhost:8081"
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mashonisa Loan application." });
});

require("./app/routes/loan.routes")(app);
require("./app/routes/payment.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

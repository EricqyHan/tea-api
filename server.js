const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const tea = {
  oolong: {
    type: "black",
    origin: "you momma",
    waterTemp: 200,
    steepTimeSeconds: 180,
    caffinated: true,
    flavor: "delicious",
  },
  matcha: {
    type: "green",
    origin: "you momma",
    waterTemp: 200,
    steepTimeSeconds: 180,
    caffinated: false,
    flavor: "delicious",
  },
  unknown: {
    type: "unknown",
    origin: "unknown",
    waterTemp: "unknown",
    steepTimeSeconds: "unknown",
    caffinated: "unknown",
    flavor: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

// note that name is just a query parameter
app.get("/api/:name", (request, response) => {
  //   console.log(request.params.name);
  const teaName = request.params.name.toLowerCase();
  if (tea[teaName]) {
    response.json(tea[teaName]);
  } else {
    response.json(tea["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}! Betta GO Catch IT!`);
});

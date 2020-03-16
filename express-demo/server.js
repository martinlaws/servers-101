const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use((request, response, next) => {
  console.log("~~~~~~~~~~NEW REQUEST~~~~~~~~~");

  console.log("METHOD:", request.method);
  console.log("URL:", request.url);
  next();
});

const dogsDb = {
  maya: {
    name: "Maya",
    favouriteFood: "Chicken",
    quirkyFact: "Missing front teeth",
    imageUrl: "https://i.imgur.com/PMtd8NE.jpg"
  },
  curly: {
    name: "Curly",
    favFood: "Smoked Trout",
    quirkyFact: "~Therapy Dog~",
    imageUrl: "https://i.imgur.com/pxIw4L5.jpg"
  }
};

app.get("/dogs/:dogName", (req, res) => {
  const dogName = req.params.dogName;
  const dog = dogsDb[dogName];

  const templateVars = {
    dog
  };

  res.render("dogPage", templateVars);
});

app.listen(4321, () => {
  console.log("EXPRESS IS LISTENING ON PORT 4321");
});

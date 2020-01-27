let pets = require("../controllers/pets");
let path = require("path");

module.exports = function(app) {
  // routes
  app.get("/api/pets", pets.index);
  app.post("/api/pets", pets.create);

  app.get("/api/pets/:id", pets.findOneById);
  app.put("/api/pets/:id", pets.update);
  app.get("/api/pets/:id/like", pets.likePet);
  app.delete("/api/pets/:id", pets.delete);

  // // routes concerning ratings
  // app.get("/api/quotes", quotes.index); // this will find all the ratings.
  // app.post("/api/quotes/:authorId", quotes.create); // this will create quotes for a specific author

  // // app.get("/api/quotes/:id", quotes.findOneById);
  // app.put("/api/quotes/:quoteId", quotes.updateVote);
  // app.delete("/api/quotes/:quoteId", quotes.delete);

  // this route will be triggered if any of the routes above did not match
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"));
  });
};

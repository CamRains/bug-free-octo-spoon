const express = require("express");
// invoking an express gives us access to CRUD methods
const app = express();
const bodyParser = require("body-parser");
const pokemonController = require("./controllers/pokemonController");
// give us a body object on the request coming in
app.use(bodyParser.json());

// Parameters
// http:localhost:3002/api/pokemon/cam
// expected output => paramteters { name: 'Cam'}

// QUERIES
// http://localhost:3002/api/pokemon/Cam?age=31
// expected output => paramteters { name: 'Cam'}
// expected output => queries:
// {age: '31'}

// BODY
// http://localhost:3002/api/pokemon/Cam?age=31
// expected output => paramteters { name: 'Cam'}
// expected output => queries: {age: '31'}
// expected output => body: {test: this came from the body}

// app.post("/api/pokemon/:name", (req, res) => {
//   console.log("parameters: ", req.params);
//   console.log("queries", req.query);
//   console.log("body", req.body);

//   res.status(200).send("<button>Press Me </Button>");
// });

app.get("/api/favorites", pokemonController.readPokemon);
app.post("/api/favorites", pokemonController.createPokemon);
app.put("/api/favorites/:id", pokemonController.updatePokemonById);
const PORT = 3002;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

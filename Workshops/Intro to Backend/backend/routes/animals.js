const express = require("express");
const router = express.Router();

let animals = [
  { id: 1, name: "Lion" },
  { id: 2, name: "Elephant" },
];

// 1. GET: See all animals
router.get("/", (req, res) => {
  res.json(animals);
});

// 2. POST: Add a new animal
router.post("/", (req, res) => {
  const newAnimal = { id: animals.length + 1, name: req.body.name };
  animals.push(newAnimal);
  res.json(newAnimal);
});

// 3. PUT: Change an animal’s name
router.put("/:id", (req, res) => {
  const animal = animals.find((a) => a.id == req.params.id);
  if (animal) {
    animal.name = req.body.name;
    res.json(animal);
  } else {
    res.status(404).send("Animal not found");
  }
});

// 4. DELETE: Remove an animal
router.delete("/:id", (req, res) => {
  animals = animals.filter((a) => a.id != req.params.id);
  res.send("Deleted!");
});

module.exports = router;

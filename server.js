const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/recipes", (req, res) => {
  const filePath = path.join(__dirname, "data", "recipes.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading recipes file" });
    }
    const recipes = JSON.parse(data || "[]");
    res.json(recipes);
  });
});

app.post("/api/recipes", (req, res) => {
  const filePath = path.join(__dirname, "data", "recipes.json");
  const { title, ingredients, instructions, cookTime, difficulty } = req.body;

  // Validation
  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Read current recipes
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading recipes file" });
    }

    const recipes = JSON.parse(data || "[]");

    // Create new recipe
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      cookTime,
      difficulty: difficulty || "medium",
    };

    recipes.push(newRecipe);

    // Save back to file
    fs.writeFile(filePath, JSON.stringify(recipes, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving recipe" });
      }
      res.status(201).json(newRecipe);
    });
  });
});

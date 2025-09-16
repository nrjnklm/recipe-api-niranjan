const API_URL = "/api/recipes";

const recipeList = document.getElementById("recipeList");
const form = document.getElementById("recipeForm");

async function loadRecipes() {
  recipeList.innerHTML = "";
  const res = await fetch(API_URL);
  const recipes = await res.json();

  recipes.forEach((r) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3>${r.title}</h3>
    <p><strong>Ingredients:</strong> ${r.ingredients}</p>
    <p><strong>Instructions:</strong> ${r.instructions}</p>
    <p><strong>Cook Time:</strong> ${r.cookTime || "Not specified"}</p>
    <p><em>Difficulty:</em> ${r.difficulty}</p>
  `;
    recipeList.appendChild(li);
  });

}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newRecipe = {
    title: document.getElementById("title").value,
    ingredients: document.getElementById("ingredients").value,
    instructions: document.getElementById("instructions").value,
    cookTime: document.getElementById("cookTime").value,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe),
  });

  form.reset();
  loadRecipes();
});

loadRecipes();

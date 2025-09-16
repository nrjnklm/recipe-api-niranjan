# 🍲 Recipe Sharing API

A simple Recipe Sharing API built with **Node.js + Express**.
This API allows users to add and view recipes. It also comes with a basic frontend for testing.

---

## 🚀 How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Sreeram9161/recipe-api-sreeram.git
   cd recipe-api-sreeram
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open your browser and go to:

   ```
   http://localhost:5000
   ```

---

## 🌐 Deployed API URL

Your live API is hosted on **Render**:
👉 []()

---

## 📌 API Endpoint Documentation

### 1. Add a new recipe (POST)

* **Endpoint**: `/api/recipes`
* **Method**: `POST`
* **Request Body (JSON)**:

  ```json
  {
    "title": "Pasta Alfredo",
    "ingredients": ["Pasta", "Cream", "Cheese"],
    "instructions": "Boil pasta, mix with sauce and cheese.",
    "cookTime": "20 minutes"
  }
  ```
* **Response**:

  ```json
  {
    "id": 1694781203947,
    "title": "Pasta Alfredo",
    "ingredients": ["Pasta", "Cream", "Cheese"],
    "instructions": "Boil pasta, mix with sauce and cheese.",
    "cookTime": "20 minutes",
    "difficulty": "medium"
  }
  ```

---

### 2. Get all recipes (GET)

* **Endpoint**: `/api/recipes`
* **Method**: `GET`
* **Response** (JSON array):

  ```json
  [
    {
      "id": 1694781203947,
      "title": "Pasta Alfredo",
      "ingredients": ["Pasta", "Cream", "Cheese"],
      "instructions": "Boil pasta, mix with sauce and cheese.",
      "cookTime": "20 minutes",
      "difficulty": "medium"
    },
    {
      "id": 1694781256789,
      "title": "Tomato Soup",
      "ingredients": ["Tomatoes", "Onion", "Garlic", "Salt"],
      "instructions": "Boil tomatoes with onion and garlic, blend, and season.",
      "cookTime": "15 minutes",
      "difficulty": "medium"
    }
  ]
  ```

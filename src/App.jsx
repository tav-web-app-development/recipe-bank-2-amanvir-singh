import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  
  const [recipes, setRecipes] = useState([]);
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
 };
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
    return () => console.log("unmounted");
  }, []);
  function filterRecipesComputeIntensive(recipes) {
    const now = performance.now();
    while (performance.now() - now < 1000) {
      //spin()
    }
    return recipes;
  }
  const filteredRecipes = useMemo(() => filterRecipesComputeIntensive(recipes), [recipes]);
  //const filteredRecipes = filterRecipesComputeIntensive(recipes);
  return (
    <>
      <Navbar />
      {filteredRecipes.map((data) => (
        <RecipeContainer recipe={data} key={data.id} deleteRecipe={deleteRecipe}/>
      ))}
      <Footer />
    </>
  );
}

export default App;

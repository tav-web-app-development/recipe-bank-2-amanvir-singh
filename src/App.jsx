import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
        console.log(data)
      });
    return () => console.log("unmounted");
  }, []);
  function filterRecipesComputeIntensive(recipes) {
    const now = performance.now();
    while (performance.now() - now < 1000) {
      {recipes.map((data) => (
        <RecipeContainer recipe={data} key={data.id} />
      ))}
      //spin()
    }
    return recipes;
  }
  const filteredRecipes = useMemo(() => filterRecipesComputeIntensive(recipes), [recipes]);
  //const filteredRecipes = filterRecipesComputeIntensive(recipes);
  return (
    <>
      <Navbar />
      {filteredRecipes}
      <Footer />
    </>
  );
}

export default App;

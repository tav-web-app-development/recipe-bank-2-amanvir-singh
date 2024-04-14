/* eslint-disable react/prop-types */
import { useState } from 'react';
function RecipeContainer({ recipe, deleteRecipe }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(recipe.title);
  const [editedDescription, setEditedDescription] = useState(recipe.description);
  const [editedIngredients, setEditedIngredients] = useState(recipe.ingredients);
  const [editedDirections, setEditedDirections] = useState(recipe.directions);
  function toggleEditMode() {
    setIsEditing(!isEditing);
   }
  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
      >
        <div className="recipe">
        <button onClick={toggleEditMode}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <p>
          {isEditing ?<h2><textarea name="title" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} /></h2>:(<h2>{editedTitle}</h2>)}
            <strong>Description:</strong>
            {isEditing?<textarea name="ingredients" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}/>:(<p>{editedDescription}</p>)}
          </p>
          <p>
            <strong>Ingredients:</strong> 
          {isEditing?<textarea name="ingredients" value={editedIngredients} onChange={(e) => setEditedIngredients(e.target.value)}/>:(<p>{editedIngredients}</p>)}
          </p>
          <p>
            <strong>Directions:</strong>
            {isEditing?<textarea name="directions" value={editedDirections} onChange={(e) => setEditedDirections(e.target.value)}/>:(<p>{editedDirections}</p>)}
          </p>
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;

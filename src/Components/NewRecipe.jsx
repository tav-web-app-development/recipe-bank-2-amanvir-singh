import { Form } from 'react-router-dom';
import { useState } from 'react';

function NewRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    directions: '',
    photoUrl: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>New Recipe</h1>
      <Form action="/">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="directions">Directions:</label>
        <textarea
          id="directions"
          name="directions"
          value={formData.directions}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="photoUrl">Photo URL:</label>
        <input
          type="url"
          id="photoUrl"
          name="photoUrl"
          value={formData.photoUrl}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Create Recipe</button>
      </Form>
    </div>
  );
}

export default NewRecipe;
import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
};

export const loadrecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const recipe = data.data.recipe;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      cookingTime: recipe.cooking_time,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      sourceUrl: recipe.source_usrl,
    };

    console.log(state.recipe);
    // console.log(res, data);
  } catch (err) {
    // temporary error handling
    console.error(`${err}`);
    throw err;
  }
};

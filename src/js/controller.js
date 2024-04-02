import * as model from './model.js';
import recipeView from './views/recipeViews.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    //Loading Spinner
    recipeView.renderSpinner();

    //Loading a recipe
    await model.loadrecipe(id);
    // const recipe = model.state.recipe;

    //Rendering a recipe
    recipeView.render(model.state.recipe);
    //const recipeView = new recipeView(model.state.recipe); (if we did export only clss in the recipeView.)
  } catch (err) {
    recipeView.renderError();
  }
};

// controlRecipes();
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
// window.addEventListener('hashchange', controlRecipes);

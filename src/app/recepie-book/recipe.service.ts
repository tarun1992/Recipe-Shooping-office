import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  constructor() {}
  recipeDetails = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Test Recipe 1', 'Test Recipe Description 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

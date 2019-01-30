import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  constructor(private srList: ShoppingListService) {}
 // recipeDetails = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe('French Toast', 'French style toast',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ] ),
    new Recipe('Burger', 'What else do you need?',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.srList.addIngredient(ingredient);
  }
}

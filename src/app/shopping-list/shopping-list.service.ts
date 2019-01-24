import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('sweetner', 20),
    new Ingredient('Apple', 10)
  ];
  ingredientAdded = new EventEmitter<Ingredient[]>();
  getIngredientAdded() {
    return this.ingredients.slice();
  }

  add(name, amount) {
    const newIngredient = new Ingredient(name, amount);
    this.ingredients.push(newIngredient);
    this.ingredientAdded.emit(this.ingredients.slice());
    // return newIngredient;
  }

}

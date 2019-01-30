import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('sweetner', 20),
    new Ingredient('Apple', 10)
  ];
 // ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new Subject();
  getIngredientAdded() {
    return this.ingredients.slice();
  }

  add(name, amount) {
    const newIngredient = new Ingredient(name, amount);
    this.ingredients.push(newIngredient);
    this.ingredientAdded.next(this.ingredients.slice());
    // return newIngredient;
  }
  addIngredient(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
}
}

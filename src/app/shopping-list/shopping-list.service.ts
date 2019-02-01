import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('sweetner', 20),
    new Ingredient('Apple', 10)
  ];
 // ingredientAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new Subject();
    startEditing = new Subject<number>();
  getIngredientAdded() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
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

deleteIngredient(index: number) {
  this.ingredients.splice(index, 1);
  this.ingredientAdded.next(this.ingredients.slice());
}

}

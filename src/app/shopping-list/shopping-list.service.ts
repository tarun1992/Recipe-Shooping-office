import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('sweetner', 20),
    new Ingredient('Apple', 10)
  ];

  getIngredientAdded() {
    return this.ingredients.slice();
  }

}

import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientChanged = new EventEmitter<Ingredient[]>();
  addRecipe = new EventEmitter<Ingredient[]>();
  constructor() { }
  getIngredient() {
    return this.ingredients.slice();
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onRecipeToList(recipe: Recipe) {

    this.ingredients.push(...recipe.ingredents);
    this.addRecipe.emit(this.ingredients.slice());


  }

}

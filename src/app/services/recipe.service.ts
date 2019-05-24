import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('BBQ Ribs', 'Fall off the bone ribs',
      'https://hips.hearstapps.com/vidthumb/images/delish-oven-baked-ribs-seo-06-1543617130.jpg?crop=0.871xw:0.707xh;0.0578xw,0.190xh&resize=768:*',
      [new Ingredient('Rack of ribs', 12), new Ingredient('BBQ Sauce', 4)]),
    new Recipe('Salad', 'Green salad',
      'https://www.gimmesomeoven.com/wp-content/uploads/2018/06/Everyday-Green-Salad-Recipe-3.jpg',
      [new Ingredient('Lettus', 1), new Ingredient('Cucumber', 1), new Ingredient('Cabage', 1)])
  ];
  selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  getRecipes() {
    //this will return a copy of the array instead of the reference
    return this.recipes.slice();
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Ribs',
      'Fall off the bone',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'burger',
      '1/2lb. Black Angus',
      'https://live.staticflickr.com/1939/30724632707_aa69612b75_b.jpg'
    )
  ];
  constructor() {}

  ngOnInit() {}
}

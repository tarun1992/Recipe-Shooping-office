import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recepie-book',
  templateUrl: './recepie-book.component.html',
  styleUrls: ['./recepie-book.component.css']
})
export class RecepieBookComponent implements OnInit {

  recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onRecipeItemClick(recipe: Recipe) {
    // this.recipeDes=recipe;
    console.log('recipe' + recipe.name);
  }
}

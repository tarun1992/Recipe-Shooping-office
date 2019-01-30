import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepie-book',
  templateUrl: './recepie-book.component.html',
  styleUrls: ['./recepie-book.component.css'],
  providers: [RecipeService]
})
export class RecepieBookComponent implements OnInit {

  // recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeDetails.subscribe(
    //   (recipe: Recipe) => {
    //     this.recipeSelected = recipe;
    //   }
    // );
  }

}

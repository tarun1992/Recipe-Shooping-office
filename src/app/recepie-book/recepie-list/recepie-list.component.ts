import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];


  constructor(private rec: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.rec.getRecipes();
  }
  // onRecipeSelected(recipeEl: Recipe) {
  //   this.selectedRecipe.emit(recipeEl);
  // }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

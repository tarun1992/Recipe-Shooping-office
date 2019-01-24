import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

 // @Output() recipeDetails = new EventEmitter<void>();

  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  recipeDetail() {
   // console.log("Recipe Item=" + this.recipe);
   // this.recipeDetails.emit();
   this.recipeService.recipeDetails.emit(this.recipe);
  }
}

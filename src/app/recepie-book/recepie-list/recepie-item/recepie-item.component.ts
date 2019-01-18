import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Output() recipeDetails = new EventEmitter<void>();

  @Input() recipe: Recipe[];
  constructor() { }

  ngOnInit() {
  }
  recipeDetail() {
   // console.log("Recipe Item=" + this.recipe);
    this.recipeDetails.emit();
  }
}

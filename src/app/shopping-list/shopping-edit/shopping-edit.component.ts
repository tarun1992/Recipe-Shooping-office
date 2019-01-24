import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameValue: ElementRef;
  @ViewChild('amountInput') amountValue: ElementRef;

 // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shppingService: ShoppingListService) { }

  ngOnInit() {
  }

  add() {
    const name = this.nameValue.nativeElement.value;
    const amount = this.amountValue.nativeElement.value;
    this.shppingService.add(name, amount);

  }

}

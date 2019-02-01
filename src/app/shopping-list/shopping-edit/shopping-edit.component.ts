import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

 // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') slform: NgForm;

  constructor(private shppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shppingService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        console.log(index);
        this.editedItem = this.shppingService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  add(form: NgForm) {
    if (this.editMode) {
      const ingredient = new Ingredient(form.value.name, form.value.amount);
      this.shppingService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shppingService.add(form.value.name, form.value.amount);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slform.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shppingService.deleteIngredient(this.editedItemIndex);
  this.onClear();
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}
}

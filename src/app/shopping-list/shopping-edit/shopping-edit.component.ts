import { Component, OnInit, ViewChild} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


 // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('form') form: NgForm;

  constructor(private shppingService: ShoppingListService) { }

  ngOnInit() {
  }

  add(form: NgForm) {
    this.shppingService.add(form.value.name, form.value.amount);

  }

}

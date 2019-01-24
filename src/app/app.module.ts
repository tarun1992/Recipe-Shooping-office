import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieBookComponent } from './recepie-book/recepie-book.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecepieListComponent } from './recepie-book/recepie-list/recepie-list.component';
import { RecepieDetailComponent } from './recepie-book/recepie-detail/recepie-detail.component';
import { RecepieItemComponent } from './recepie-book/recepie-list/recepie-item/recepie-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecepieBookComponent,
    ShoppingEditComponent,
    RecepieListComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

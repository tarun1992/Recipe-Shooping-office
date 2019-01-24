import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepieBookComponent } from './recepie-book/recepie-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecepieBookComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

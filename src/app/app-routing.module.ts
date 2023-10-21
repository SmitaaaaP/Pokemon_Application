import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  { path:"" , component: HomepageComponent},
  { path: "card-details/:id" , component : CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

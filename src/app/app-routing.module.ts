import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPasswordGeneratorComponent } from './card-password-generator/card-password-generator.component';

const routes: Routes = [
  {
    path: '',
    component: CardPasswordGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecComponent } from './tec/tec.component';

const routes: Routes = [
  {
    path: '',
    component: TecComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecRoutingModule { }

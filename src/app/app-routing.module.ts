import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostmodelCRUDComponent } from './costmodel-crud/costmodel-crud.component';
import { CostmodellistComponent } from './costmodellist/costmodellist.component';

const routes: Routes = [
  {path:'ViewCostModel',component:CostmodellistComponent},
  {path:'AddCostModel',component:CostmodelCRUDComponent},
  {path:'EditCostModel/:id',component:CostmodelCRUDComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

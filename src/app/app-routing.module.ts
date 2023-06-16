import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostmodelCRUDComponent } from './CostModel/costmodel-crud/costmodel-crud.component';
import { CostmodellistComponent } from './CostModel/costmodellist/costmodellist.component';
import { ImporttypeCrudComponent } from './ImportType/importtype-crud/importtype-crud.component';
import { ImporttypelistComponent } from './ImportType/importtypelist/importtypelist.component';
import { PriceTableComponent } from './Price/price-table/price-table.component';
import { ProductCrudComponent } from './Product/product-crud/product-crud.component';
import { ProductlistComponent } from './Product/productlist/productlist.component';
import { ProductgroupCrudComponent } from './ProductGroup/productgroup-crud/productgroup-crud.component';
import { ProductgrouplistComponent } from './ProductGroup/productgrouplist/productgrouplist.component';
import { UnitdefinitionCrudComponent } from './UnitDefinition/unitdefinition-crud/unitdefinition-crud.component';
import { UnitdefinitionlistComponent } from './UnitDefinition/unitdefinitionlist/unitdefinitionlist.component';
import { UnitfactorCrudComponent } from './UnitFactor/unitfactor-crud/unitfactor-crud.component';
import { UnitfactorlistComponent } from './UnitFactor/unitfactorlist/unitfactorlist.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/ViewCostModel', pathMatch: 'full' },
  {path:'ViewCostModel',component:CostmodellistComponent},
  {path:'AddCostModel',component:CostmodelCRUDComponent},
  {path:'EditCostModel/:id',component:CostmodelCRUDComponent},
  {path:'ViewProductGroup',component:ProductgrouplistComponent},
  {path:'AddProductGroup',component:ProductgroupCrudComponent},
  {path:'EditProductGroup/:id',component:ProductgroupCrudComponent},
  {path:'ViewImportType',component:ImporttypelistComponent},
  {path:'AddImportType',component:ImporttypeCrudComponent},
  {path:'EditImportType/:id',component:ImporttypeCrudComponent},
  {path:'ViewUnitDefinition',component:UnitdefinitionlistComponent},
  {path:'AddUnitDefinition',component:UnitdefinitionCrudComponent},
  {path:'EditUnitDefinition/:id',component:UnitdefinitionCrudComponent},
  {path:'ViewUnitFactor',component:UnitfactorlistComponent},
  {path:'AddUnitFactor',component:UnitfactorCrudComponent},
  {path:'EditUnitFactor/:id',component:UnitfactorCrudComponent},
  {path:'ViewProduct',component:ProductlistComponent},
  {path:'AddProduct',component:ProductCrudComponent},
  {path:'EditProduct/:id',component:ProductCrudComponent},
  {path:'Price',component:PriceTableComponent},
  {path:'**',component:ErrorpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

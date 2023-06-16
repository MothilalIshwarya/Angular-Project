import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostmodellistComponent } from './CostModel/costmodellist/costmodellist.component';
import { CostmodelCRUDComponent } from './CostModel/costmodel-crud/costmodel-crud.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';
import { ProductgrouplistComponent } from './ProductGroup/productgrouplist/productgrouplist.component';
import { ProductgroupCrudComponent } from './ProductGroup/productgroup-crud/productgroup-crud.component';
import { MatIconModule, MatNativeDateModule, MatSlideToggleModule } from '@angular/material';
import { UnitdefinitionlistComponent } from './UnitDefinition/unitdefinitionlist/unitdefinitionlist.component';
import { UnitdefinitionCrudComponent } from './UnitDefinition/unitdefinition-crud/unitdefinition-crud.component';
import { UnitfactorlistComponent } from './UnitFactor/unitfactorlist/unitfactorlist.component';
import { UnitfactorCrudComponent } from './UnitFactor/unitfactor-crud/unitfactor-crud.component';
import { ImporttypelistComponent } from './ImportType/importtypelist/importtypelist.component';
import { ImporttypeCrudComponent } from './ImportType/importtype-crud/importtype-crud.component';
import { ProductlistComponent } from './Product/productlist/productlist.component';
import { ProductCrudComponent } from './Product/product-crud/product-crud.component';
import { PriceTableComponent } from './Price/price-table/price-table.component';
import { PricegridComponent } from './Price/pricegrid/pricegrid.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CostmodellistComponent,
    CostmodelCRUDComponent,
    NavbarComponent,
    
    FooterComponent,
         ProductgrouplistComponent,
         ProductgroupCrudComponent,
         UnitdefinitionlistComponent,
         UnitdefinitionCrudComponent,
         UnitfactorlistComponent,
         UnitfactorCrudComponent,
         ImporttypelistComponent,
         ImporttypeCrudComponent,
         ProductlistComponent,
         ProductCrudComponent,
         PriceTableComponent,
         PricegridComponent,
         ErrorpageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,    
    MatSlideToggleModule,
    MatIconModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

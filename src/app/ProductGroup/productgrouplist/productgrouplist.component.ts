import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { HotToastService } from '@ngneat/hot-toast';
import { ProductgroupService } from '../productgroup.service';
import { MatIconModule, MatSlideToggleModule } from '@angular/material';


@Component({
  selector: 'app-productgrouplist',
  templateUrl: './productgrouplist.component.html',
  styleUrls: ['./productgrouplist.component.css']
})
export class ProductgrouplistComponent implements OnInit {

  constructor(private productGroupService: ProductgroupService, private toast: HotToastService) { }
  text = "";
  totalLength = 0;
  page = 0;
  FilterData: any;
  ProductGroup: any = [{
    id: 0,
    productGroupCode: '',
    productGroupName: '',
    enabled: 0,
    accountByGroup: 0,
    graceperiod: 0,
    supportgroupId: 0,
    comment:"",
    description_CostModel: "",
    description_Agreement: "",
    description_UnitFactor: "",
  }]
  ngOnInit(): void {
    this.productGroupService.GetAllProductGroup().subscribe(res => {
      this.ProductGroup = res;
      this.totalLength = this.ProductGroup.length;
      this.FilterData = this.ProductGroup;
    })
  }
  //Delete ProductGroup
  DeleteProductGroup(id: number, enableStatus: number) {
    if (enableStatus == 0) {
      this.text = 'Are You Sure You Want to Enable';
    }
    else {
      this.text = 'Are You Sure You Want to Disable';
    }
    if (confirm(this.text) == true) {
      this.productGroupService.DeleteProductGroup(id).subscribe(res => {
        location.reload();
      })
    }
    else {
      location.reload();
    }
  }
  //Filter for search
  FilterByProductGroup(search: HTMLInputElement) {
    if (search.value != '') {
      this.ProductGroup = this.FilterData.filter((ProductGroup: any) => this.getFilteredData(ProductGroup, search))
    }
    else {
      this.ProductGroup = this.FilterData;
    }
    this.UpdateCurrentPage();
  }
  getFilteredData(productgroup: any, search: HTMLInputElement): any {
    return productgroup.productGroupName.toLowerCase().includes(search.value.toLowerCase());
  }
  UpdateCurrentPage() {
    this.page = 1;
    this.totalLength = this.ProductGroup.length;
  }
}

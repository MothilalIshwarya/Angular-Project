import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { HotToastService } from '@ngneat/hot-toast';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private productService: ProductService, private hotoastService: HotToastService) { }

  title = "Product";
  Product: any = [{
    id: 0,
    featuresKey: "",
    enabled: 0,
    isApproved: 0,
    displayName: "",
    licenseCount: 0,
    manufacturerName: "",
    comment: "",
    productGroupName: "",
    licTypeName: "",
  }];
  filteredData: any[] = [];
  totalLength = 0;
  searchValue = '';
  page = 1;
  text = "";
  isChecked = true;

  ngOnInit(): void {
    this.productService.GetAllProduct().subscribe(res => {
      this.Product = res
      this.totalLength = this.Product.length;
      this.filteredData = this.Product;
    });
  }

  //search by name
  filterByName(search: HTMLInputElement) {
    if (search.value != '') {
      this.Product = this.filteredData.filter((Product: any) => this.getFilteredData(Product, search))
    } else {
      this.Product = this.filteredData
    }
    this.updateCurrentPageAndTotalLength();
  }
  private getFilteredData(Product: any, search: HTMLInputElement): any {
    return Product.featuresKey.toLowerCase().includes(search.value.toLowerCase());
  }
  private updateCurrentPageAndTotalLength() {
    this.page = 1;
    this.totalLength = this.Product.length;
  }

  //Delete Product
  DeleteProduct(id: number, enableStatus: number) {
    if (enableStatus == 0) {
      this.text = 'Are You Sure You Want to Enable';
    }
    else {
      this.text = 'Are You Sure You Want to Disable';
    }
    if (confirm(this.text) == true) {
      this.productService.DeleteProduct(id).subscribe(res => {
        // window.location.replace("/ViewProduct");
        location.reload();
      })
    }
    else {
      // window.location.replace("/ViewProduct");
      location.reload();
    }

  }

  // onToggleChange(event: MatSlideToggleChange) {
  //   console.log(`Slide toggle is now ${event.checked ? 'checked' : 'unchecked'}`);
  // }
}



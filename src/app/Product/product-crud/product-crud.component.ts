import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LicensetypeService } from 'src/app/License Type/licensetype.service';
import { ProductgroupService } from 'src/app/ProductGroup/productgroup.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  id = 0;
  constructor(private productservice: ProductService, private productGroupService: ProductgroupService, private licenseTypeService: LicensetypeService, private activatedroute: ActivatedRoute, private toastService: HotToastService) {
    activatedroute.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id);
    })
  }
  isProductGroupId = false
  islicTypeId = false
  isisApproved = false
  ErrorMessage = ""
  pageTitle = "Product"
  pageAction = ''
  ProductGroup: any;
  LicenseType: any;
  ProductForm: any;
  Product: any = {
    id: 0,
    productGroupId: 0,
    featuresKey: '',
    licTypeId: 0,
    enabled: 0,
    isApproved: 0,
    displayName: '',
    licenseCount: 0,
    manufacturerName: '',
    comment: ''
  }

  ngOnInit(): void {
    this.GetProductGroup();
    this.GetLicenseType();
    this.FormData()
    if (this.id != 0 && this.id != undefined) {
      this.GetProductById()
    }    
  }
  //GetProductById
  async GetProductById(){
    await this.productservice.GetProductById(this.id).subscribe( {
      next:(res)=>{this.Product = res;
      console.log(this.Product)
      },
      complete:()=>{this.FormData()}
    })
  }
  //FormGroup
  async FormData(){
    this.ProductForm = new FormGroup({
      'id':new FormControl(this.Product.id),
      'productGroupId': new FormControl(this.Product.productGroupId, [
        Validators.required,
      ]),
      'featuresKey': new FormControl(this.Product.featuresKey, [
        Validators.required,
        Validators.maxLength(80),
        Validators.minLength(5)
      ]),
      'licTypeId': new FormControl(this.Product.licTypeId, [
        Validators.required,
      ]),
      'displayName': new FormControl(this.Product.displayName, [
        Validators.required,
        Validators.maxLength(80),
        Validators.minLength(5)
      ]),
      'licenseCount': new FormControl(this.Product.licenseCount, [
        Validators.required
      ]),
      'manufacturerName': new FormControl(this.Product.manufacturerName, [
        Validators.required,
        Validators.maxLength(160),
        Validators.minLength(5)
      ]),
      'comment': new FormControl(this.Product.comment, [

        Validators.maxLength(1000),

      ]),
      'isApproved': new FormControl(this.Product.isApproved, [
        Validators.required
      ]),
      'enabled': new FormControl(this.Product.enabled, [
        Validators.required
      ]),

    })
    // //Add/Edit Button was disable when productGroupId dropdown value was not selected 
    // this.ProductForm.get('productGroupId').valueChanges.subscribe((value: number) => {
    //   this.isProductGroupId = value !== 0;
    // });
    // //Add/Edit Button was disable when licTypeId dropdown value was not selected 
    // this.ProductForm.get('licTypeId').valueChanges.subscribe((value: number) => {
    //   this.islicTypeId = value !== 0;
    // });
    // //Add/Edit Button was disable when isApproved dropdown value was not selected 
    // this.ProductForm.get('isApproved').valueChanges.subscribe((value: number) => {
    //   this.isisApproved = value !== 0;
    // });
  }
  //GetProductGroup for dropdown
  GetProductGroup() {
    this.productGroupService.GetAllProductGroup().subscribe(res => {
      this.ProductGroup = res;
      console.log(this.ProductGroup);

    })
  }
  //GetLicenseType for dropdown
  GetLicenseType() {
    this.licenseTypeService.GetAllLicenseType().subscribe(res => {
      this.LicenseType = res;
      console.log(this.LicenseType);

    })
  }

  //Onsubmit
  Onsubmit(Productdata:any) {
    console.log("form value" , Productdata.value)
    // if (this.id != undefined) {
      this.productservice.PostProduct(Productdata.value).subscribe({
        next: (res: any) => {
          this.toastService.success("Product was updated successfully.")
        },
        complete() {
          setTimeout(() => {
            window.location.replace("/ViewProduct")
          }, 1000);
        },
        error: (err: any) => {
          this.ErrorMessage = err.error
        }
      })
    // } 
    // else {
    //   this.productservice.PostProduct(this.Product).subscribe({
    //     next: (res: any) => {
    //       this.toastService.success("Product was created successfully.")

    //     },
    //     complete() {
    //       setTimeout(() => {
    //         window.location.replace("/ViewProduct")
    //       }, 1000);
    //     },
    //     error: (err: any) => {
    //       this.ErrorMessage = err.error
    //     }
    //   })
    // }

  }

}
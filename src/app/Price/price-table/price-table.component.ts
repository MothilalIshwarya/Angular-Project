import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { combineLatest } from 'rxjs';
import { AgreementService } from 'src/app/Agreement/agreement.service';
import { CostModelService } from 'src/app/CostModel/cost-model.service';
import { ProductgroupService } from 'src/app/ProductGroup/productgroup.service';
import { VendorService } from 'src/app/Vendor/vendor.service';
import { PricegridComponent } from '../pricegrid/pricegrid.component';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {
  constructor(private fb: FormBuilder, private VendorService: VendorService, private AgreementService: AgreementService, private productGroupService: ProductgroupService, private costmodelService: CostModelService) { }
  boolcostmodel = false
  costmodelName = ""
  Vendor: any;
  Agreement: any
  date: Date = new Date();
  vendorId = 0;
  agreementId = 0;
  ProductGroup: any = {
    id: 0,
    productGroupCode: '',
    productGroupName: '',
    agreementId: 0,
    costModelId: 0,
    unitFactorId: 0,
    accountByGroup: 0,
    comment: '',
    enabled: 1,
    graceperiod: 0,
    supportgroupId: 0
  };
  dropdownSettings: IDropdownSettings = {};
  sample: any = {
    id: 0,
    productGroupCode: ""
  };
  enable = false;
  PriceForm: any;
  ngOnInit(): void {
    this.GetVendor();
    this.PriceForm = this.fb.group({
      'vendorId': new FormControl(0, [
        Validators.required
      ]),
      'agreementId': new FormControl(0, [
        Validators.required
      ]),
      'productGroupId': [],
      'dateStart': new FormControl('', [
        Validators.required
      ]),
      'dateEnd': new FormControl('', [
        Validators.required
      ]),
      'PriceAmount': new FormControl('', [
        Validators.required,
      ])
    })
    //for multiselect dropdown checkbox
    this.dropdownSettings = {
      idField: 'id',
      textField: 'productGroupName',
      allowSearchFilter: true
    };
    //if vendor name is change set agreement as default
    this.PriceForm.get('vendorId').valueChanges.subscribe(() => {
      this.PriceForm.patchValue({
        agreementId: 0
      });
    })
    //if vendor name is change set productgroup as default
    this.PriceForm.get('vendorId').valueChanges.subscribe(() => {
      var productGroupIdControl = this.PriceForm.get('productGroupId');
      productGroupIdControl.setValue([]);
    })
    //if agreement name is change set Productgroup as default
    this.PriceForm.get('agreementId').valueChanges.subscribe(() => {
      var productGroupIdControl = this.PriceForm.get('productGroupId');
      productGroupIdControl.setValue([]);
    })
    //observing the startdate and enddate
    const dateStart$ = this.PriceForm.get('dateStart').valueChanges;
    const dateEnd$ = this.PriceForm.get('dateEnd').valueChanges;
    //used to combine the latest emitted values from multiple observables(datestart and dateend) into a single observable that emits an array of these values 
    combineLatest([dateStart$, dateEnd$]).subscribe(() => {
      this.checkEndDateValidity();
    });
    //if any of the formvalue is change hide gridview
    this.PriceForm.valueChanges.subscribe(() => {
      this.enable = false

    })
  }
  //get prouductgroupid formarray 
  get productGroupId(): FormArray {
    return this.PriceForm.get('productGroupId') as FormArray;
  }
  //get vendor
  GetVendor() {
    this.VendorService.GetAllVendor().subscribe(res => {
      this.Vendor = res;
      console.log(this.Vendor);
    })
  }
  //get agreement
  onVendorInputChange(id: number) {
    console.log(id)
    this.AgreementService.GetAgreementByVendorId(id).subscribe(res => {
      this.Agreement = res;
      console.log(this.Agreement);
    })
  }
  //get productgroup
  onAgreementInputChange(id: number) {
    this.productGroupService.GetProductGroupByAgreementId(id).subscribe(res => {
      this.ProductGroup = res;
      this.costmodelName = this.ProductGroup[0].description_CostModel
      if (this.costmodelName.toLowerCase() != 'contract') {
        this.boolcostmodel = true
        this.PriceForm.get('productGroupId').setValidators(Validators.required);
      }
      else {
        this.boolcostmodel = false
        this.PriceForm.get('productGroupId').clearValidators(Validators.required);
      }
      console.log("Costmodel Name", this.costmodelName)
      this.sample = null;

      this.PriceForm.get('productGroupId').updateValueAndValidity();
    })
  }
  //after complete the form enable grid view
  Onsubmit() {
    this.enable = true;
  }
  //@output emitted values for Product group array
  ProductgroupValueChangeMethod(data: any) {
    this.PriceForm.get('productGroupId').setValue(data)
    this.enable = true
  }
  //validating Start and end date
  checkEndDateValidity() {
    const dateStart = this.PriceForm.get('dateStart').value;
    const dateEnd = this.PriceForm.get('dateEnd').value;
    if (dateStart && dateEnd && dateStart >= dateEnd) {
      this.PriceForm.get('dateEnd').setErrors({ invalidEndDate: true });
    } else {
      this.PriceForm.get('dateEnd').setErrors(null);
    }
  }
}

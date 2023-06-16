import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { HotToastComponent } from '@ngneat/hot-toast/lib/components/hot-toast/hot-toast.component';
import { AgreementService } from 'src/app/Agreement/agreement.service';
import { ProductgroupService } from 'src/app/ProductGroup/productgroup.service';
import { VendorService } from 'src/app/Vendor/vendor.service';
import { ModcontractService } from '../modcontract.service';

@Component({
  selector: 'app-pricegrid',
  templateUrl: './pricegrid.component.html',
  styleUrls: ['./pricegrid.component.css']
})
export class PricegridComponent implements OnInit {
  @Input()
  InputItem: any
  @Output()
  OutputItem = new EventEmitter()
  constructor(private agreementService: AgreementService, private vendorService: VendorService, private ProductgroupService: ProductgroupService,private modcontractService:ModcontractService, private toastservice: HotToastService) { }
  SelctedPriceTable: any;
  Agreement: any = {
    agreementCode: ""
  };
  productgroup: any = {
    costModelId: 0,
  }
  Vendor: any = {
    vendorName: ""
  };
  costmodelid = 0;
  ModContract: any = {
    agreementId: 0,
    dateStart: "",
    dateEnd: "",
    ContractValue: 0,
    comments: ""
  }
  enable = false;
  totalLength = 0;
  page = 0;
  ProductPriceGroup = [{}]
  samplearray: any[] = [{
    id: 0,
    productGroupCode: "",
    productgroupName: ""
  }]
  ngOnInit(): void {
    this.SelctedPriceTable = this.InputItem.value;
    this.samplearray = this.InputItem.value.productGroupId
    this.GetAgreement(this.SelctedPriceTable.agreementId)
    this.GetVendor(this.SelctedPriceTable.vendorId)
    if (this.samplearray.length != 0) {
      this.startmethod()
    }
  }
  //if productgrouparray have data in price table get the costmodel name for specify the table(modcontract/productpricegroup)
  startmethod() {
    if (this.samplearray.length != 0) {
      this.GetProductGroupById(this.samplearray[0].id);
      this.totalLength = this.samplearray.length;
      this.enable = true
    }
  }
  //save modcontract and productgroupprice data into db
  savemethod() {
    this.ProductPriceGroup = []
    if (this.costmodelid == 0) {
      const PostModContract = {
        agreementId: this.SelctedPriceTable.agreementId,
        dateStart: this.SelctedPriceTable.dateStart,
        dateEnd: this.SelctedPriceTable.dateEnd,
        ContractValue: this.SelctedPriceTable.PriceAmount,
        Comment: ""
      }
      this.modcontractService.PostModContract(PostModContract).subscribe({
        next: (res => {
          this.toastservice.success("Price Updated in ModContract Table")
        }),
        complete() {
          setTimeout(() => {
            window.location.replace("/Price")
          }, 1000);

        }
      })
    }
    else {
      for (let i = 0; i < this.samplearray.length; i++) {
        const s = [{
          ProductGroupId: this.samplearray[i].id,
          LicServerGroupId: 111,
          DateStart: this.SelctedPriceTable.dateStart,
          DateEnd: this.SelctedPriceTable.dateEnd,
          PriceContract: this.SelctedPriceTable.PriceAmount,
          PricePerUnit: 0,
          CostFactor: 0,
          Enabled: true,
          MacComment: "",
          Description: ""
        }]
        this.ProductPriceGroup.push(s[0]);
      }
      console.warn(this.ProductPriceGroup);
      this.modcontractService.PostProductGroupPrice(this.ProductPriceGroup).subscribe({
        next: (res => {
          this.toastservice.success("Price Updated in ProductGroupPrice Table")
        }),
        complete() {
          setTimeout(() => {
            window.location.replace("/Price")
          }, 1000);
        }
      })
    }
  }
  //get agreement by id
  GetAgreement(id: number) {
    this.agreementService.GetAgreementById(id).subscribe(res => {
      this.Agreement = res;
    })
  }
  //get vendor by id
  GetVendor(id: number) {
    this.vendorService.GetVendorById(id).subscribe(res => {
      this.Vendor = res;
    })
  }
  //get productgroup by id (for find costmodel id)
  GetProductGroupById(id: number) {
    this.ProductgroupService.GetProductGroupById(id).subscribe(res => {
      this.productgroup = res;
      this.costmodelid = res.costModelId
    })
  }
  //delete array data
  RemoveArray(id: number) {
    this.samplearray.splice(id, 1)
    console.log(this.samplearray)
    this.page = 1
    this.totalLength = this.samplearray.length
    this.OutputItem.emit(this.samplearray)
  }
}

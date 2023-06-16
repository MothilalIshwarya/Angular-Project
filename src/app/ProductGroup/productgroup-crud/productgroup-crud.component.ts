import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AgreementService } from 'src/app/Agreement/agreement.service';
import { CostModelService } from 'src/app/CostModel/cost-model.service';
import { UnitFactorService } from 'src/app/UnitFactor/unit-factor.service';
import { ProductgroupService } from '../productgroup.service';

@Component({
  selector: 'app-productgroup-crud',
  templateUrl: './productgroup-crud.component.html',
  styleUrls: ['./productgroup-crud.component.css']
})
export class ProductgroupCrudComponent implements OnInit {
  id = 0;
  constructor(private productGroupService: ProductgroupService, private costmodelService: CostModelService, private unitfactorService: UnitFactorService, private agreementService: AgreementService, private activatedroute: ActivatedRoute, private toastService: HotToastService) {
    activatedroute.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id);
    })
  }
  errormsg = ""
  CostModel: any;
  UnitFactor: any;
  Agreement: any;
  
  ProductGroupForm: any;
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
  }
  ngOnInit(): void {
    this.GetCostModel();
    this.GetUnitFactor();
    this.GetAgreement();
    this.FormData()
    if (this.id != 0 && this.id != undefined) {
      this.GetProductGroupById()
    }
  }
  //GetProductGroupById
  async GetProductGroupById(){
   await this.productGroupService.GetProductGroupById(this.id).subscribe({
      next:(res)=>{
        this.ProductGroup = res;
      },
      complete:()=>{
        this.FormData()
      }
    })
  }
  //GetCostModel for dropdown
  GetCostModel() {
    this.costmodelService.GetAllCostModel().subscribe(res => {
      this.CostModel = res;
      console.log(this.CostModel);

    })
  }

  //GetUnitFactor for dropdown
  GetUnitFactor() {
    this.unitfactorService.GetAllUnitFactor().subscribe(res => {
      this.UnitFactor = res;
      console.log(this.UnitFactor);

    })
  }
    //GetAgreement for dropdown
    GetAgreement() {
      this.agreementService.GetAllAgreement().subscribe(res => {
        this.Agreement = res;
        console.log(this.Agreement);
  
      })
  
    }
  //form data
  async FormData(){
    this.ProductGroupForm = new FormGroup({
      'id':new FormControl(this.ProductGroup.id),
      'productGroupCode': new FormControl(this.ProductGroup.productGroupCode, [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5)
      ]),
      'productGroupName': new FormControl(this.ProductGroup.productGroupName, [
        Validators.required,
        Validators.maxLength(510),
        Validators.minLength(5)
      ]),
      'accountByGroup': new FormControl(this.ProductGroup.accountByGroup, [
        Validators.required
      ]),
      'graceperiod': new FormControl(this.ProductGroup.graceperiod, [
        Validators.required
      ]),
      'supportgroupId': new FormControl(this.ProductGroup.supportgroupId, [
        Validators.required
      ]),
      'costModelId': new FormControl(this.ProductGroup.costModelId, [
        Validators.required,
      ]),
      'unitFactorId': new FormControl(this.ProductGroup.unitFactorId, [
        Validators.required
      ]),
      'agreementId': new FormControl(this.ProductGroup.agreementId, [
        Validators.required
      ]),
      'comment': new FormControl(this.ProductGroup.comment, [
        Validators.maxLength(510),
      ]),
      'enabled': new FormControl(this.ProductGroup.enabled, [
        Validators.required
      ])
    });
  
  }

  //Onsubmit
  Onsubmit(FormValue:any) {
      this.productGroupService.PostProductGroup(FormValue.value).subscribe({
        next: (res: any) => {
          this.toastService.success("ProductGroup was updated successfully.")
        },
        complete() {
          setTimeout(() => {
            window.location.replace("/ViewProductGroup")
          }, 1000);
        },
        error: (err: any) => {
          this.errormsg = err.error;
          console.log("error : " + this.errormsg);
        }
      })
  }
}

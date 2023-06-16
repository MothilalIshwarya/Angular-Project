import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { CostModelService } from '../cost-model.service';

@Component({
  selector: 'app-costmodel-crud',
  templateUrl: './costmodel-crud.component.html',
  styleUrls: ['./costmodel-crud.component.css']
})
export class CostmodelCRUDComponent implements OnInit {

  CostModelForm: any;
  costModel:any={
    id:0,
    costModelName:"",
    Description:""
    
  };
  id = 0;
  ErrorMessage = ""
  constructor(private activatedroute: ActivatedRoute, private costmodelservice: CostModelService, private toastService: HotToastService) {
    activatedroute.params.subscribe((params) => {
      this.id = params['id']
    })
  }

  user: any;

  ngOnInit(): void {
    this.FormMethod();
    if (this.id != 0 && this.id!=undefined) {
      this.GetCostmodel();

    }
    

  }
  async GetCostmodel() {
    await this.costmodelservice.GetCostModelById(this.id).subscribe({
      next: (res) => {
        this.costModel = res;
        console.log(this.costModel)
      },
      complete: () => this.FormMethod()
    });
  }
  async FormMethod() {
    
     this.CostModelForm = new FormGroup({
      'id':new FormControl(this.costModel.id),
      'CostModelName': new FormControl(this.costModel.costModelName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      'Description': new FormControl(this.costModel.description, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
      ])
    })
  }
  Onsubmit(costmodeldata:any) {
    this.costmodelservice.PostCostModel(costmodeldata.value).subscribe({
      next: (res: any) => {
        this.toastService.success("CostModel was updated successfully.")
      },
      complete() {
        setTimeout(() => {
          window.location.replace("/ViewCostModel")
        }, 1000);
      },
      error: (err: any) => {
        this.ErrorMessage = err.error;
        console.log("Error Message" + this.ErrorMessage)
      }
    })


  }

}



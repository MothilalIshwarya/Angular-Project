import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UnitdefinitionService } from '../unitdefinition.service';

@Component({
  selector: 'app-unitdefinition-crud',
  templateUrl: './unitdefinition-crud.component.html',
  styleUrls: ['./unitdefinition-crud.component.css']
})
export class UnitdefinitionCrudComponent implements OnInit {

  UnitDefinitionForm: any;
  id = 0;
  ErrorMessage=""
  // toastService: any;
  constructor(private activatedroute: ActivatedRoute, private unitdefinitionservice: UnitdefinitionService, private toastService: HotToastService) {
    activatedroute.params.subscribe((params) => {
      this.id = params['id']
    })
  }
  public UnitDefinition: any = {
    id:0,
    unitDefinitionCode: "",
    description: "",
    shortDescription:"",
    usageTip:""
  }
  
  // user: any;


  ngOnInit(): void {
    console.log(this.id)
    this.FormGroupData()
    if (this.id != 0 && this.id != undefined) {
      this.GetUnitDefinition();
    }   
  }
  async FormGroupData(){
    this.UnitDefinitionForm = new FormGroup({
      id:new FormControl(this.UnitDefinition.id),
      'unitDefinitionCode': new FormControl(this.UnitDefinition.unitDefinitionCode, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      'description': new FormControl(this.UnitDefinition.description, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(510)
      ]),

      'shortDescription': new FormControl(this.UnitDefinition.shortDescription, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),

      'usageTip': new FormControl(this.UnitDefinition.usageTip, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(510)
      ])
    })
  }
  async GetUnitDefinition() {
    await this.unitdefinitionservice.GetUnitDefinitionById(this.id).subscribe({
      next:(res)=>{
        this.UnitDefinition = res;
      },
      complete:()=>{this.FormGroupData()}
    })
  }
  Onsubmit(data:any) {
   // debugger
    console.log("form value")
    // if (this.id != undefined) {
      this.unitdefinitionservice.PostUnitDefinition(data.value).subscribe({
        next: (res: any) => {
          this.toastService.success("UnitDefinition was updated successfully.")  
        },
        complete() {
          setTimeout(() => {
            window.location.replace("/ViewUnitDefinition")
          }, 1000);  
        },
        error: (err: any) => {
          this.ErrorMessage=err.error
        }
      })
    // } else {
    //   this.unitdefinitionservice.PostUnitDefinition(this.UnitDefinition).subscribe({
    //     next: (res: any) => {
    //       this.toastService.success("Unit Definition was created successfully.")
    //     },
    //     complete() {
    //       setTimeout(() => {
    //         window.location.replace("/ViewUnitDefinition")
    //       }, 1000); 
    //     },
    //     error: (err: any) => {
    //       this.ErrorMessage=err.error
    //     }
    //   })
    // }

  //}
  //Handles multiple error message from server
  


}
}


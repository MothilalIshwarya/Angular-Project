import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ImporttypeService } from '../importtype.service';

@Component({
  selector: 'app-importtype-crud',
  templateUrl: './importtype-crud.component.html',
  styleUrls: ['./importtype-crud.component.css']
})
export class ImporttypeCrudComponent implements OnInit {

  ImportTypeForm: any;
  id = 0;
  ErrorMessage=""
  // toastService: any;
  constructor(private activatedroute: ActivatedRoute, private importtypeservice: ImporttypeService, private toastService: HotToastService) {
    activatedroute.params.subscribe((params) => {
      this.id = params['id']
      console.log(this.id)
    })
  }
  public ImportType: any = {
    id:0,
    importTypeName: "",
    description: ""
  }
  pageAction = ''
  pageTitle = ''
  user: any;
  ngOnInit(): void {
    console.log(this.id)
    this.FormGroupData();
    if (this.id != 0 && this.id != undefined) {
      this.GetImportType();
    }
   
  }
  async FormGroupData(){
    this.ImportTypeForm = new FormGroup({
      'id':new FormControl(this.ImportType.id),
      'importTypeName': new FormControl(this.ImportType.importTypeName, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      'description': new FormControl(this.ImportType.description, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(225)
      ])
    })
  }
  async GetImportType() {
    await this.importtypeservice.GetImportTypeById(this.id).subscribe({
      next:(res)=>{
        this.ImportType = res;
        console.log("id data" + this.ImportType)

      },
      complete:()=>{
        this.FormGroupData()
      }
    })
  }
  Onsubmit(formData:any) {
   // debugger
    console.log("form value",formData.value)
    const ImportTypedata={
      id:this.ImportTypeForm.get('id').value,
      importTypeName:this.ImportTypeForm.get('importTypeName').value,
      description:this.ImportTypeForm.get('description').value
    }
    debugger
      this.importtypeservice.PostImportType(ImportTypedata).subscribe({
        next: (res: any) => {
          this.toastService.success("ImportType was updated successfully.")          
        },
        complete() {
          setTimeout(() => {
            window.location.replace("/ViewImportType")
          }, 1000); 
        },
        error: (err: any) => {
          this.ErrorMessage=err.error;
        }
      })
    

  }
  


  }



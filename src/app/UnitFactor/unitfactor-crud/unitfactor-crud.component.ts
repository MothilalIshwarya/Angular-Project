import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UnitdefinitionService } from 'src/app/UnitDefinition/unitdefinition.service';
import { UnitFactorService } from '../unit-factor.service';

@Component({
  selector: 'app-unitfactor-crud',
  templateUrl: './unitfactor-crud.component.html',
  styleUrls: ['./unitfactor-crud.component.css']
})
export class UnitfactorCrudComponent implements OnInit {

  id = 0;
  // toastService: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private unitfactorservice: UnitFactorService,
    private Unitdefinitionservice: UnitdefinitionService,
    private toastService: HotToastService
  ) {
    activatedroute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
  ErrorMessage=""
  UnitDefinition: any;
  UnitFactor: any = {
    unitFactorCode: '',
    unitDefinitionId: 0,
    description: '',
    costValue: 0,
    id: 0,
  };

  UnitFactorForm: any;
  ngOnInit(): void {
    this.Formdata()
    this.getUnitdefinition();

    if (this.id != 0 && this.id != undefined) {
      this.GetUnitFactorById();
    } 
   
   
  }
  async Formdata(){
    this.UnitFactorForm = new FormGroup({
      'id':new FormControl(this.UnitFactor.id),
      unitFactorCode: new FormControl(this.UnitFactor.unitFactorCode, [
        Validators.required,
        Validators.maxLength(50),
        // Validators.pattern("^PGC(?!.*PGC).*$"),
        Validators.minLength(5),
      ]),
      'description': new FormControl(this.UnitFactor.description, [
        Validators.required,
        Validators.maxLength(510),
        Validators.minLength(5),
      ]),
      'costValue': new FormControl(this.UnitFactor.costValue, [Validators.required]),
      'unitDefinitionId': new FormControl(this.UnitFactor.unitDefinitionId, [Validators.required]),
      
    });
    // this.UnitFactorForm.get('unitDefinitionId').valueChanges.subscribe((value: number) => {
    //   this.isUnitDefinitionDropdownSelected = value !== 0;
    // });
  }
  GetUnitFactorById(){
    this.unitfactorservice.GetUnitFactorById(this.id).subscribe( {
      next:(res)=>{
        this.UnitFactor = res;
        console.log('unit factor by id' + this.UnitFactor);

      },
      complete:()=>this.Formdata()
    });
  }
  //Onsubmit
  Onsubmit(data:any) {
    console.log('form value' + this.UnitFactor);
    // if (this.id != undefined) {
      this.unitfactorservice.PostUnitFactor(data.value).subscribe({
        next: (res: any) => {
          this.toastService.success('Unit Factor was updated successfully.');
          
        },
        complete() {
          setTimeout(() => {
            window.location.replace('/ViewUnitFactor');
          }, 1000);
        },
        error: (err: any) => {
          
          this.ErrorMessage = err.error;
        },
      });
    
  }
  getUnitdefinition() {
    this.Unitdefinitionservice.GetAllUnitDefinition().subscribe((result) => {
      this.UnitDefinition = result;
      console.log(this.UnitDefinition);
    });
  }
 
}



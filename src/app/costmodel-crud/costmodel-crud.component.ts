import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-costmodel-crud',
  templateUrl: './costmodel-crud.component.html',
  styleUrls: ['./costmodel-crud.component.css']
})
export class CostmodelCRUDComponent implements OnInit {

  CostModelForm:any;
  id=0;
  constructor(private activatedroute:ActivatedRoute) {
    activatedroute.params.subscribe((params)=>{
      this.id=params['id']
    })
   }
  pageAction = ''
  pageTitle=''
  user : any;

  ngOnInit(): void {
    console.log(this.id)
    if(this.id==0 || this.id==undefined ){
      this.pageAction="Add"
      this.pageTitle="Add Cost Model"
      // this.pageAction="Edit"
      // this.pageTitle="Edit Cost Model"
    }
    else{
      this.pageAction="Edit"
      this.pageTitle="Edit Cost Model"
    }
    this.CostModelForm=new FormGroup({
      'CostModelName': new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)
      ]),
      'Description':new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ])
    })
  }
  Onsubmit(Formvale:NgForm){
    console.log(Formvale.value)
    


  }

}

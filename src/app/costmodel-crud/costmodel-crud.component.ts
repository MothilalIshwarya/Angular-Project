import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costmodel-crud',
  templateUrl: './costmodel-crud.component.html',
  styleUrls: ['./costmodel-crud.component.css']
})
export class CostmodelCRUDComponent implements OnInit {

  userform:any;
  constructor() { }
  pageAction = 'ADD'
  pageTitle='Add Cost model'
  user : any;

  ngOnInit(): void {
  }
  OnSubmit(){

  }

}

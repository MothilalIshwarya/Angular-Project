import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costmodellist',
  templateUrl: './costmodellist.component.html',
  styleUrls: ['./costmodellist.component.css']
})
export class CostmodellistComponent implements OnInit {
  title="Cost Model";
  constructor() { }

  CostModel:any=[
    { id:1,name:'Fixed',Description:'Price is fixed for unit d every one. Yet, alas, our resources are not without limit and we must ask for thy patience and forbearance.'},
    {id:2,name:'Variable',Description:'price is variable and depending on the usage'},
    {id:3,name:'Token',Description:' Price is Token for usage'},
    {id:4,name:'Direct',Description:' Price is Direct for usage'},
    {id:5,name:'Indirect',Description:' Price is Indirect for usage'},
    {id:6,name:'Token',Description:' Price is Token for usage'},
  
  ]
  page = 1;
  totalLength = this.CostModel.length;
    ngOnInit(): void {
      console.log(this.CostModel);
    }
    filterByName(){
  
    }
    myfunction(id:number){
  
    }
    filterByDepartment(){
      
    }

}

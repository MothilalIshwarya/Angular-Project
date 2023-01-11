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
    {name:'Fixed',Description:'Price is fixed for unit d every one. Yet, alas, our resources are not without limit and we must ask for thy patience and forbearance.'},
    {name:'Variable',Description:'price is variable and depending on the usage'},
    {name:'Token',Description:' Price is Token for usage'},
    {name:'Direct',Description:' Price is Direct for usage'},
    {name:'Indirect',Description:' Price is Indirect for usage'},
    {name:'Token',Description:' Price is Token for usage'},
  
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

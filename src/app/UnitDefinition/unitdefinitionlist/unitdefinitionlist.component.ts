import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { UnitdefinitionService } from '../unitdefinition.service';

@Component({
  selector: 'app-unitdefinitionlist',
  templateUrl: './unitdefinitionlist.component.html',
  styleUrls: ['./unitdefinitionlist.component.css']
})
export class UnitdefinitionlistComponent implements OnInit {


  constructor(private unitdefinitionService: UnitdefinitionService,private hottoastservice:HotToastService) { }
  // Declaring Variable
  title = "Unit Definition";
  UnitDefinition: any = [{
    id: 0,
    unitDefinitionCode: "",
    description: "",
    shortDescription:"",
    usageTip:""
  }];  
  filteredData: any[] = [];
  totalLength = 0;
  searchValue = '';
  page = 1;

  ngOnInit(): void {

    this.unitdefinitionService.GetAllUnitDefinition().subscribe(res => {
      this.UnitDefinition = res
      this.totalLength = this.UnitDefinition.length;
      this.filteredData = this.UnitDefinition;
    });
  }

  //  Filter
filterByName(search: HTMLInputElement) {
  if (search.value != '') {
    this.UnitDefinition = this.filteredData.filter((UnitDefinition: any) => this.getFilteredImportType(UnitDefinition, search))
  } else {
    this.UnitDefinition = this.filteredData
  }
  this.updateCurrentPageAndTotalLength();
}
private getFilteredImportType(UnitDefinition: any, search: HTMLInputElement): any {
  return UnitDefinition.unitDefinitionCode.toLowerCase().includes(search.value.toLowerCase());
}
private updateCurrentPageAndTotalLength() {
  this.page = 1;
  this.totalLength = this.UnitDefinition.length;

}


}






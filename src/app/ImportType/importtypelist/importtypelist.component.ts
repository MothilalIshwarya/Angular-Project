import { Component, OnInit } from '@angular/core';
import { ImporttypeService } from '../importtype.service';

@Component({
  selector: 'app-importtypelist',
  templateUrl: './importtypelist.component.html',
  styleUrls: ['./importtypelist.component.css']
})
export class ImporttypelistComponent implements OnInit {

  constructor(private importtypeService:ImporttypeService) { }
// Declaring Variable
title = "Import Type";
ImportType: any = [{
  id: 0,
  ImportTypeName: "",
  Description: "",
}];  
filteredData: any[] = [];
totalLength = 0;
searchValue = '';
page = 1;

ngOnInit(): void {

  this.importtypeService.GetAllImportType().subscribe(res => {
    this.ImportType = res
    this.totalLength = this.ImportType.length;
    this.filteredData = this.ImportType;
  });
}

//  Filter
filterByName(search: HTMLInputElement) {
  if (search.value != '') {
    this.ImportType = this.filteredData.filter((ImportType: any) => this.getFilteredImportType(ImportType, search))
  } else {
    this.ImportType = this.filteredData
  }
  this.updateCurrentPageAndTotalLength();
}
private getFilteredImportType(ImportType: any, search: HTMLInputElement): any {
  return ImportType.importTypeName.toLowerCase().includes(search.value.toLowerCase());
}
private updateCurrentPageAndTotalLength() {
  this.page = 1;
  this.totalLength = this.ImportType.length;

}

}

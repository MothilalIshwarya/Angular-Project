import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { UnitFactorService } from '../unit-factor.service';

@Component({
  selector: 'app-unitfactorlist',
  templateUrl: './unitfactorlist.component.html',
  styleUrls: ['./unitfactorlist.component.css']
})
export class UnitfactorlistComponent implements OnInit {

  constructor(private unitfactorservice: UnitFactorService) {}
  title = 'Unit Factor';
  isChecked = true;
  FilteredData: any;
  searchValue = '';
  page = 1;
  totalLength = 0;
  UnitFactor: any = [
    {
      id: 0,
      unitFactorCode: '',
      unitDefinitionId: 0,
      description: '',
      costValue: 0,
      description_UnitDefinition: '',
    },
  ];

  ngOnInit(): void {
    this.getUnitfactor();
    console.log(this.UnitFactor);
    // this.FilteredData = this.UnitFactor;
  }
  getUnitfactor() {
    this.unitfactorservice.GetAllUnitFactor().subscribe((data) => {
      console.log(data), (this.UnitFactor = data);
      this.FilteredData = this.UnitFactor;
    });
  }
  // DeleteUnitFactor(id: number) {
  //    let text="Are You Sure Do You Want to Delete"
  //   if (confirm(text) == true) {
  //     this.unitfactorservice.DeleteUnitFactor(id).subscribe((result) => {
  //       window.location.replace('/ViewUnitFactor');
  //     });
  //   } else {
  //     window.location.replace('/ViewUnitFactor');
  //   }
  // }
  // private updateCurrentPageAndTotalLength() {
  //   this.page = 1;
  //   this.totalLength = this.UnitFactor.length;
  // }
  // FilterByUnitFactor(search: HTMLInputElement) {
  //   debugger
  //   if (search.value != '') {
  //     this.UnitFactor = this.FilteredData.filter((UnitFactor: any) =>
  //       this.getFilteredData(UnitFactor, search)
  //     );
  //   } else {
  //     this.UnitFactor = this.FilteredData;
  //   }
  //   this.updateCurrentPageAndTotalLength();
  // }
  // // private UpdateCurrentPage() {
  // //   this.page = 1;
  // //   this.totalLength = this.UnitFactor.length;
  // // }
  // private getFilteredData(UnitFactor: any, search: HTMLInputElement): any {
  //   return UnitFactor.unitFactorCode.toLowercase().includes(search.value.toLowerCase());
  // }
  filterByName(search: HTMLInputElement) {
    if (search.value != '') {
      this.UnitFactor = this.FilteredData.filter((UnitFactor: any) => this.getFilteredImportType(UnitFactor, search))
      console.log(this.UnitFactor)
    } else {
      this.UnitFactor = this.FilteredData
    }
    this.updateCurrentPageAndTotalLength();
  }
  private getFilteredImportType(UnitFactor: any, search: HTMLInputElement): any {
    return UnitFactor.unitFactorCode.toLowerCase().includes(search.value.toLowerCase());
  }
  private updateCurrentPageAndTotalLength() {
    this.page = 1;
    this.totalLength = this.UnitFactor.length;
  
  }
  
   
}




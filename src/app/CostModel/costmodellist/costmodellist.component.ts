import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CostModelService } from '../cost-model.service';

@Component({
  selector: 'app-costmodellist',
  templateUrl: './costmodellist.component.html',
  styleUrls: ['./costmodellist.component.css']
})
export class CostmodellistComponent implements OnInit {


  constructor(private costModelService: CostModelService, private hottoastservice: HotToastService) { }
  // Declaring Variable
  CostModel: any = [{
    id: 0,
    CostModelName: "",
    Description: "",
  }];
  filteredData: any[] = [];
  totalLength = 0;
  page = 1;

  ngOnInit(): void {

    this.costModelService.GetAllCostModel().subscribe(res => {
      this.CostModel = res
      this.totalLength = this.CostModel.length;
      this.filteredData = this.CostModel;
    });
  }

  //  Filter data
  filterByName(search: HTMLInputElement) {
    if (search.value != '') {
      this.CostModel = this.filteredData.filter((CostModel: any) => this.getFilteredCostModel(CostModel, search))
    } else {
      this.CostModel = this.filteredData
    }
    this.updateCurrentPageAndTotalLength();
  }
  private getFilteredCostModel(CostModel: any, search: HTMLInputElement): any {
    return CostModel.costModelName.toLowerCase().includes(search.value.toLowerCase());
  }
  private updateCurrentPageAndTotalLength() {
    this.page = 1;
    this.totalLength = this.CostModel.length;

  }

}

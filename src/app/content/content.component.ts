import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public data: any = {};
  public stateData: any = [];
  public selectedstateData: string = '';
  public filteredData: any = [];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getCounsellingsList().subscribe((data: any) => {
      console.log(data);
      this.data = data.data;
      console.log('data', this.data);
      this.selectedstateData = Object.keys(this.data)[0];
    });
  }

  public changeStateOption() {
    this.selectedstateData = this.selectedstateData;
  }

  public filterData(id: number) {
    this.commonService.getFilterData(id).subscribe((data: any) => {
      this.filteredData = data;
      console.log(this.filteredData);
    });
  }
}

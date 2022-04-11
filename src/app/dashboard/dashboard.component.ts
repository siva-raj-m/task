import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public data=[];
  constructor(private commonService: CommonService ) {
    console.log('test1')
    this.commonService.getCounsellingsList()
   }

  ngOnInit(): void {
    console.log('test')
    this.commonService.getCounsellingsList().subscribe((data: any) => {
      console.log(data);
      this.data=data;
    })
  }

}

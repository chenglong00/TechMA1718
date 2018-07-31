import { Component, OnInit, Input} from '@angular/core';
import { RetrieveService } from '../shared/retrieve.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-dan',
  templateUrl: './dan.component.html',
  styleUrls: ['./dan.component.css']
})

export class DanComponent implements OnInit {

 datalist:any = [];
 imageroute = 'assets/images/';
 CardNumber: any;

 
 constructor(private retrieveService: RetrieveService, dataService: DataService) {

      dataService.CardNumber.subscribe(num => {
      this.CardNumber = num});

  }

  ngOnInit() {

    this.retrieveService.getAllData().subscribe(datalist => {
       this.datalist = JSON.parse(JSON.stringify(datalist));
    });

}
   
}


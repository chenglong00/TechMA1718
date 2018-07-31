import { Component, OnInit} from '@angular/core';
import { RetrieveService } from '../shared/retrieve.service';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 datalist:any = [];
 imageroute = 'assets/images/';
 CardNumber: any;


   onSetCard(i) {
    let dataService = new DataService();
    dataService.CardNumber.next(i); 
    this.CardNumber = i;
    this.datalist.unsubscribe;

  }


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
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title = 'Credit Cards';
  banner = 'assets/images/Citi.png';
  imageroute = 'assets/images/'; 

  constructor() { }

  ngOnInit() { }
}

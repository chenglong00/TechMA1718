import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
	static instance: DataService;

	 CardNumber = new BehaviorSubject<number>(0);


	 constructor() { 
	  return DataService.instance = DataService.instance || this;
	}
	}



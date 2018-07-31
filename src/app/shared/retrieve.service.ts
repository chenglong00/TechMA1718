import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RetrieveService {

  constructor(private http: Http) { }

  // Get all data from the API
  getAllData() {
    return this.http.get('/api/retrieve')
      .map(res => res.json());
  }
}


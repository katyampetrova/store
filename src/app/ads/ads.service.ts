import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAd } from '../interfaces/ad';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) { }

//   getAllAds() {
//     return this.http.get<IAd[]>('/api/');
//   }
}

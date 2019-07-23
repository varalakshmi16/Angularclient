import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
private baseUrl:string="http://localhost:3011/";
  constructor(private _http:HttpClient) { }
  getCountries(page:number){
    return this._http.get(this.baseUrl+'/list?page='+page);

  }
}

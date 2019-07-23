import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
private page:number=0;
private countries:Array<any>;
private pages:Array<number>;

  constructor(private _myService:CountryService) { }
  setPage(i,event:any)
  {
    event.preventDefault();
this.page=i;
this.getCountries();
  }
  ngOnInit() {
    this.getCountries();
  }
getCountries(){
  this._myService.getCountries(this.page).subscribe(
    data=>{
    //  console.log(data);
    this.countries=data['content'];
    this.pages=new Array(data['totalPages']);
    },
    (error)=>{
      console.log(error.error.message);

    }
    
  );
}

}

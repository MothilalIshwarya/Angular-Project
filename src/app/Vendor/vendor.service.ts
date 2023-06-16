import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  BaseUrl="https://localhost:7266/api/Vendor";
  constructor(public http:HttpClient) { }
  GetAllVendor():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl);
  }
  GetVendorById(id : number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id)
  }
}

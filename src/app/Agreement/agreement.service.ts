import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {
  BaseUrl="https://localhost:7266/api/Agreement"
  constructor(private http:HttpClient) { }
  GetAllAgreement():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl);
  }
  GetAgreementByVendorId(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl+"/VendorId/"+id)
  }
  GetAgreementById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id)
  }
 
}
//https://localhost:7266/api/Agreement/VendorId?id=1
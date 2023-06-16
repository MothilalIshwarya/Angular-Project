import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {
  
  BaseUrl="https://localhost:7266/api/Productgroup";
  constructor(private http:HttpClient) { }
  GetAllProductGroup():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl);
  }
  DeleteProductGroup(id:any):Observable<any>{
    return this.http.delete<any>(this.BaseUrl+"/Delete/"+id);
  }
  GetProductGroupById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id);
  }
  PostProductGroup(data:any):Observable<any>{
    return this.http.post<any>(this.BaseUrl,data);
  }
  PutProductGroup(data:any):Observable<any>{
    return this.http.put<any>(this.BaseUrl,data);
  }
  GetProductGroupByAgreementId(id:number):Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl+"/AgreementId/"+id);
  }
}
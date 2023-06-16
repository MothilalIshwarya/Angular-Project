import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitFactorService {

  BaseUrl="https://localhost:7266/api/UnitFactor"
  constructor(private http:HttpClient) { }
  GetAllUnitFactor():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl);
  }
  GetUnitFactorById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id)
  }
  PostUnitFactor(data:any):Observable<any>{
    return this.http.post<any>(this.BaseUrl,data)
  }
  PutUnitFactor(data:any):Observable<any>{
    return this.http.put<any>(this.BaseUrl,data)
  }
  DeleteUnitFactor(id:any):Observable<any>{
    return this.http.delete<any>(this.BaseUrl+"/"+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImporttypeService {
  BaseUrl="https://localhost:7266/api/importtype"
  constructor(private http:HttpClient) { }
  GetAllImportType():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl)
  }
  GetImportTypeById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id)
  }
  PostImportType(data:any):Observable<any>{
    return this.http.post<any>(this.BaseUrl,data)
  }
  PutImportType(data:any):Observable<any>{
    return this.http.put<any>(this.BaseUrl,data)
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitdefinitionService {

  constructor(private http:HttpClient) { }
  BaseUrl="https://localhost:7266/api/UnitDefinition"
 
  GetAllUnitDefinition():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl)
  }
  GetUnitDefinitionById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id)
  }
  PostUnitDefinition(data:any):Observable<any>{
    return this.http.post<any>(this.BaseUrl,data)
  }
  PutUnitDefinition(data:any):Observable<any>{
    return this.http.put<any>(this.BaseUrl,data)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostModelService {


  constructor(private http: HttpClient) { }

   baseUrl="https://localhost:7266/api/CostModel";
  // public headers = {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json'
  // }

  GetAllCostModel(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
    // , { headers: this.headers });
  }
  GetCostModelById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+"/"+id)
  }
  PostCostModel(data:any):Observable<any>{
    console.log(data)
    return this.http.post<any>(this.baseUrl,data);
  }
  PutCostModel(data:any):Observable<any>{
    console.log(data);
    return this.http.put<any>(this.baseUrl,data);
  }
  DeleteCostModel(value:number):Observable<any>{
    console.log(value);
    return this.http.delete<any>(this.baseUrl+"/Delete/"+value);
  }
}


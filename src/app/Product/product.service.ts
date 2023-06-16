import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  BaseUrl="https://localhost:7266/api/product";

  GetAllProduct():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl);
  }
  DeleteProduct(id:any):Observable<any>{
    return this.http.delete<any>(this.BaseUrl+"/Delete/"+id);
  }
  GetProductById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id);
  }
  PostProduct(data:any):Observable<any>{
    return this.http.post<any>(this.BaseUrl,data);
  }
  PutProduct(data:any):Observable<any>{
    return this.http.put<any>(this.BaseUrl,data);
  }
}

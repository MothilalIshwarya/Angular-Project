import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModcontractService {

  constructor(private http:HttpClient) { }
  PostModContract(data:any):Observable<any>{
    return this.http.post<any>("https://localhost:7266/api/ModContract",data);
  }
  PostProductGroupPrice(data:any):Observable<any>{
    return this.http.post<any>("https://localhost:7266/api/productgroupprice/Post",data);
  }
}

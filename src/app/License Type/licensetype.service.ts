import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicensetypeService {
  constructor(private http:HttpClient) { }
  BaseUrl="https://localhost:7266/api/licensetype";

  GetAllLicenseType():Observable<any[]>{
    return this.http.get<any[]>(this.BaseUrl);
  }
  DeleteLicenseType(id:any):Observable<any>{
    return this.http.delete<any>(this.BaseUrl+"/Delete/"+id);
  }
  GetLicenseTypeById(id:number):Observable<any>{
    return this.http.get<any>(this.BaseUrl+"/"+id);
  }
  PostLicenseType(data:any):Observable<any>{
    return this.http.post<any>(this.BaseUrl,data);
  }
  PutLicenseType(data:any):Observable<any>{
    return this.http.put<any>(this.BaseUrl,data);
  }
}

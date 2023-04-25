import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { personelTask } from '../models/personelTask.Model';
import { environment } from '../../environments/environment.prod';
import { pay } from '../models/pay.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }
  getOverTimeRequestAdmin():Observable<personelTask[]>{
    return this.http.get<personelTask[]>(environment.host+"employe/OverTimeList").pipe(
      map((data:any)=>{
        var response :personelTask[] = data;
        return response;
      })
      );
  }
  acceptRequestId(id:string):Observable<any>{

    return this.http.get(environment.host+"employe/OverTimeAccept/"+id);

  }
  acceptRequest():Observable<any>{

    return this.http.get(environment.host+"employe/OverTimeAccept/");

  }
  getEmployeDetail():Observable<pay>{
    return this.http.get<pay>(environment.host+"employe/GetEmployeData").pipe(
      map((data:any)=>{
        var pay : pay = data[0];
        return pay;

      })
    )
  }
}

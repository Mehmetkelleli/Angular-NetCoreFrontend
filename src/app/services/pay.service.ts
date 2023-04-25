import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { pay } from '../models/pay.model';
import { environment } from '../../environments/environment';
import { personelTask } from '../models/personelTask.Model';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http:HttpClient) { }
  getPayList():Observable<pay[]>{
    return this.http.get<pay[]>(environment.host+"employe").pipe(
      map((data:any)=>{
        var paylist :pay[] = data;
        return paylist;
      }),tap(data=>{
        console.log(data)
      })

    )
  }
  getPayById(id:string):Observable<pay[]>{
    return this.http.get<pay[]>(environment.host+"employe/"+id).pipe(
      map((data:any)=>{
        var paylist :pay[] = data;
        return paylist;
      }),tap(data=>{
        console.log(data)
      })
    )
  }
  pay(id:any):Observable<any>{
    return this.http.get(environment.host+"employe/pay/"+id);
  }
  payAll():Observable<any>{
    return this.http.get(environment.host+"employe/pay/");
  }
  req(hour:number):Observable<any>{
    return this.http.get(environment.host+"employe/OverTimeRequest/"+hour);
  }
  reqList():Observable<personelTask[]>{
    return this.http.get<personelTask[]>(environment.host+"employe/OverTimerequestList").pipe(
      map((data:any)=>{
        var taskList :personelTask[] = data
        return taskList;
      })
    )
  }
}

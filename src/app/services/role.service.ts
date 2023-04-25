import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { roleWithUserDto } from '../models/roleWithUserDto.Model';
import { environment } from 'src/environments/environment.prod';
import { rolewithUserById } from '../models/rolewithUserById.Model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {


  constructor(private http:HttpClient) { }
  getRoleWithUser():Observable<roleWithUserDto[]>{
    return this.http.get<roleWithUserDto[]>(environment.host+"RoleManager").pipe(
      map((data:any)=>{
        var rolelist :roleWithUserDto[] = data;
        return rolelist;
      }),tap((data:any)=>{
        console.log(data);
      })
    )
  }
  creteRole(data:any):Observable<any>{
    return this.http.post(environment.host+"RoleManager",data);
  }
  getRoleById(id:string):Observable<any>{
    return this.http.get(environment.host+"RoleManager/"+id).pipe(
      map((data:any)=>{
        var role :rolewithUserById = data;
        return role;
      }),tap(data=>{
        console.log(data);
      })
    );
  }
  updateRole(data:any):Observable<any> {
    console.log(data);
    return this.http.put<any>(environment.host+"RoleManager",data);
  }
}

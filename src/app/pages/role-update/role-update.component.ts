import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { rolewithUserById } from '../../models/rolewithUserById.Model';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.scss']
})
export class RoleUpdateComponent implements OnInit {
  id:string = "";
  role:rolewithUserById;
  userId :string[] = [];
  nonUserId :string[] = [];
  imagePath:string = environment.imagepath+"users/";
  constructor(private route:ActivatedRoute,private RoleService:RoleService,private router:Router,private tost:ToastrService) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
    this.RoleService.getRoleById(this.id).subscribe({
      next:(data:rolewithUserById)=>{
        this.role = data;
      }
    })
  }
  update(form:NgForm){
    if(form.valid){
      console.log(form.value);
      console.log(this.nonUserId);
      console.log(this.userId);
      this.RoleService.updateRole({id:this.role.role.id,name:this.role.role.name,wage:this.role.role.wage,overtimePay:this.role.role.overtimePay,userId:this.userId,nonUserId:this.nonUserId}).subscribe({
        next:()=>{
          this.router.navigate(["/role"]);
          this.tost.success("Role Update SuccessFully");
        },error:(err:HttpErrorResponse)=>{

          console.log(err.error);

          this.tost.error("Role Not Updated");
        }
      })
    }
  }
  Remove(id:string):void {
    if(this.nonUserId.includes(id)){
      this.nonUserId = this.nonUserId.filter(id=>id != id);
    }else{
      this.nonUserId.push(id);
    }
  }
  Add(id:string):void{
    if(this.userId.includes(id)){
      this.userId = this.userId.filter(id=>id != id);
    }else{
      this.userId.push(id);
    }
  }
}

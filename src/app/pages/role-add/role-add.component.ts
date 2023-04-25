import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent {

 constructor(private roleService: RoleService,private router:Router,private tost:ToastrService) {

 }
  role:any={}
 createRole(form:NgForm){
    if(form.valid){
      this.roleService.creteRole(this.role).subscribe({
        next:()=>{
          this.router.navigate(["/role"]);
          this.tost.success("Role Create SuccessFully");
        },error:()=>{
          this.tost.error("Role Create Not SuccessFully");
        }
      })
    }
 }
}

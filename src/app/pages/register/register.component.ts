import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  file:File;
  registers:any={
  };
  
  constructor(private auth:AuthService,private router: Router,private tost:ToastrService) { }

  ngOnInit() {
  }
  singUp(valid:NgForm):void{
    if(valid.valid){
      const formData = new FormData();
      if(!this.file.name.includes(".jpg")){
        this.tost.error("Image Is Jpg Format Required");
        return;
      }
      formData.append("Name",this.registers.Name);
      formData.append("LastName",this.registers.LastName);
      formData.append("UserName",this.registers.UserName);
      formData.append("EMail",this.registers.EMail);
      formData.append("Age",this.registers.Age);
      formData.append("Picture",this.file);
      formData.append("Password",this.registers.Password);

      console.log(valid.value);
      console.log(this.registers);
      this.auth.singUp(formData).subscribe({
        next:()=>{
          this.router.navigate(["/login"]);
          this.tost.success("Register SuccessFully");
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error);
        }
      })
    }
  }
  onFileChanged(event) {
    const file = event.target.files[0]
    this.file = file;
  }
}

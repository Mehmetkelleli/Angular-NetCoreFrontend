import { Component, OnInit } from "@angular/core";
import { PayService } from "../../services/pay.service";
import { pay } from "src/app/models/pay.model";
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.component.html",
  styleUrls: ["./pay.component.scss"],
})
export class PayComponent implements OnInit {
  imagePath=environment.imagepath+"users";

  employeList: pay[] = [];

  constructor(private payService: PayService,private tost:ToastrService) {}

  ngOnInit(): void {
    this.payService.getPayList().subscribe({
      next:(data:pay[])=>{
        this.employeList = data
      },error:(err:HttpErrorResponse)=>{
        this.tost.error(err.error)
        console.log(err);
      }
    })
  }
  payEmps(){
    this.payService.payAll().subscribe({
      next:()=>{
        this.tost.success("Employes Payed !");
        this.ngOnInit();
      },error:(err:HttpErrorResponse)=>{
        this.tost.error("Employes Not Payed !");
        console.log(err.error);
      }
    })
  }
  pay(id:string){
    this.payService.pay(id).subscribe({
      next:()=>{
        this.tost.success("Employe Payed !");
      },error:()=>{
        this.tost.error("Employe Not Payed !");
      }
    })
  }
}

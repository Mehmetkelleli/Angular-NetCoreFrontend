import { Component, OnInit } from "@angular/core";
import { PayService } from '../../services/pay.service';
import { ActivatedRoute } from '@angular/router';
import { pay } from "src/app/models/pay.model";
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-pay-details",
  templateUrl: "./pay-details.component.html",
  styleUrls: ["./pay-details.component.scss"],
})
export class PayDetailsComponent implements OnInit {
  id :string;
  employe:pay;
  imagePath=environment.imagepath+"users";

  constructor(private pay:PayService,private router:ActivatedRoute,private tost:ToastrService) {}
  ngOnInit(): void {
      this.router.params.subscribe(params => {
        this.id = params['id'];
      });
      this.pay.getPayById(this.id).subscribe({
        next:(data:pay[])=>{
          this.employe = data[0];
          console.log(this.employe);
        },error:(err:HttpErrorResponse)=>{
          this.tost.error(err.error);
        }
      })
  }
  payEmp(){
    this.pay.pay(this.employe.employe.id).subscribe({
      next:()=>{
        this.tost.success("Employe Payed !");
        this.ngOnInit();
      },error:()=>{
        this.tost.error("Employe Not Payed !");
      }
    })
  }
  payTheId(id:string){
    this.pay.pay(this.employe.employe.id).subscribe({
      next:()=>{
        this.tost.success("Payed !");
        this.ngOnInit();
      },error:()=>{
        this.tost.error("Not Payed !");
      }
    })
  }
}

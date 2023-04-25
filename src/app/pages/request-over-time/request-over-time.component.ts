import { Component, OnInit } from '@angular/core';
import { PayService } from '../../services/pay.service';
import { ToastrService } from 'ngx-toastr';
import { personelTask } from 'src/app/models/personelTask.Model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-request-over-time',
  templateUrl: './request-over-time.component.html',
  styleUrls: ['./request-over-time.component.scss']
})
export class RequestOverTimeComponent implements OnInit {
 list :personelTask[] = [];
  constructor(private pay:PayService,private tost:ToastrService) {

  }

  ngOnInit(): void {
    this.pay.reqList().subscribe((data:personelTask[])=>{
        this.list = data;
        console.log(this.list);
    })
  }
  request(hour:any){
    console.log(hour.value);
    this.pay.req(hour.value).subscribe({
      next:()=>{
        this.tost.success("Request Completed !");
        this.ngOnInit();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.error);
        this.tost.error("Request Failed !");
      }
    })
  }
}

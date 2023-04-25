import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { personelTask } from 'src/app/models/personelTask.Model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-over-time-list',
  templateUrl: './over-time-list.component.html',
  styleUrls: ['./over-time-list.component.scss']
})
export class OverTimeListComponent implements OnInit {
  list:personelTask[] = [];
  constructor(private employe:EmployeService,private tost:ToastrService) {

  }
  ngOnInit(): void {
      this.employe.getOverTimeRequestAdmin().subscribe(data=>{
        this.list = data;
        console.log(this.list);
      })
  }
  accept(id:string){
    this.employe.acceptRequestId(id).subscribe({
      next:()=>{
        this.tost.success("Employe Accepted");
      },error:()=>{
        this.tost.error("System Error");
      }
    })
  }
  acceptAll=()=>{
    this.employe.acceptRequest().subscribe({
      next:()=>{
        this.tost.success("Employes Accepted");
      },error:()=>{
        this.tost.error("System Error");
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { pay } from 'src/app/models/pay.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  employe :pay;

  constructor(private employeService:EmployeService) {}
  ngOnInit(): void {
      this.employeService.getEmployeDetail().subscribe({
        next:(data:pay)=>{
          this.employe = data;
          console.log(this.employe);
        },error:(err:HttpErrorResponse)=>{
          console.log(err.message)
        }
      })
  }
}

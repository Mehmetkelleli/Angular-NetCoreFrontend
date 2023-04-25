import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { roleWithUserDto } from '../../models/roleWithUserDto.Model';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit{
    roleList : roleWithUserDto[];
    imagePath=environment.imagepath+"users";
    constructor(private RoleService:RoleService) {}
    ngOnInit(): void {
      this.RoleService.getRoleWithUser().subscribe(data=>this.roleList = data);

    }
}

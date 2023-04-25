import { Routes, CanActivate } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AuthGuard } from '../../guards/auth.guard';
import { RoleComponent } from '../../pages/role/role.component';
import { RoleAddComponent } from 'src/app/pages/role-add/role-add.component';
import { RoleUpdateComponent } from 'src/app/pages/role-update/role-update.component';
import { PayComponent } from 'src/app/pages/pay/pay.component';
import { PayDetailsComponent } from '../../pages/pay-details/pay-details.component';
import { RequestOverTimeComponent } from '../../pages/request-over-time/request-over-time.component';
import { OverTimeListComponent } from '../../pages/over-time-list/over-time-list.component';

export const AdminLayoutRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'dashboard',      component: DashboardComponent},
  {path:"role",component: RoleComponent},
  {path:"roleAdd",component: RoleAddComponent},
  {path:"roleUpdate/:id",component: RoleUpdateComponent},
  {path:"pay",component: PayComponent},
  {path:"payDetails/:id",component: PayDetailsComponent},
  {path:"requestOverTime",component:RequestOverTimeComponent},
  {path:"requestOverTimeList",component:OverTimeListComponent}
];

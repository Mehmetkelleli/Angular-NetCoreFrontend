import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { RoleComponent } from '../../pages/role/role.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoleAddComponent } from '../../pages/role-add/role-add.component';
import { RoleUpdateComponent } from '../../pages/role-update/role-update.component';
import { PayComponent } from '../../pages/pay/pay.component';
import { PayDetailsComponent } from '../../pages/pay-details/pay-details.component';
import { RequestOverTimeComponent } from '../../pages/request-over-time/request-over-time.component';
import { OverTimeListComponent } from '../../pages/over-time-list/over-time-list.component';

@NgModule({
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TablesComponent,
        MapsComponent,
        RoleComponent,
        RoleAddComponent,
        RoleUpdateComponent,
        PayComponent,
        PayDetailsComponent,
        RequestOverTimeComponent,
        OverTimeListComponent
      ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        ComponentsModule,
    ]
})

export class AdminLayoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './users/component/user-list/user-list.component';
import { UserDetailsComponent } from './users/component/user-details/user-details.component';
import { CarListComponent } from './cars/component/car-list/car-list.component';
import { CarDetailComponent } from './cars/component/car-detail/car-detail.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, UserListComponent, UserDetailsComponent, CarListComponent, CarDetailComponent]
})
export class LayoutModule {}

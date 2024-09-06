import { Routes } from '@angular/router';
import { catchAllRoute, ClerkAuthGuardService } from 'ngx-clerk';
import { AppComponent } from './app.component';
import { createComponent } from '@angular/core';
import { CreateComponent } from './components/create/create.component';
import { ReportComponent } from './components/report/report.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {
          path: '',
        matcher: catchAllRoute('user'),
        component: ListComponent,
        // canActivate: [ClerkAuthGuardService]
    
    },
    {
        path:'create',component: CreateComponent, title: 'Create'
    },
    {
        path:'report/:id',component: ReportComponent, title: 'Report'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

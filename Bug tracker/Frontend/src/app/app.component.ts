import { Component, createComponent } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { ClerkService, ClerkUserButtonComponent, ClerkUserProfileComponent } from 'ngx-clerk';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReportComponent, ListComponent, CreateComponent, ClerkUserButtonComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  constructor(private _clerk: ClerkService) {
    this._clerk.__init({
      publishableKey: 'pk_test_a25vd24tbWFjYXF1ZS01MS5jbGVyay5hY2NvdW50cy5kZXYk',
      
    });
  }
}

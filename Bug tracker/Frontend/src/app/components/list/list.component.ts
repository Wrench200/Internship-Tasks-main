import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  reports: any[] = [];
  loading = true;

  constructor(private reportService: ApiService) { }

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.reportService.getReports().subscribe(
      (data) => {
        this.reports = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching reports:', error);
        this.loading = false;
      }
    );
  }
}



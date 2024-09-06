import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-report',
  standalone: true,
  imports: [DatePipe, CommonModule, RouterModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  report: any;
  reportId: any;
  loader: boolean = false;
  success: boolean = false
  error: boolean = false

  constructor(private reportService: ApiService, private activeroute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeroute.params.subscribe(params => {
      this.reportId = params['id'];
      this.fetchReport(this.reportId);
    })
  }
  fetchReport(id:string): void {
    this.reportService.getReport(id).subscribe(
      (data) => {
        this.report = data;
        console.log(this.report);
        
        this.loader = false;
      },
      (error) => {
        console.error('Error fetching reports:', error);
        this.loader = false;
      }
    );
  }
  resolve() {
    this.reportService.resolve(this.report._id, 'Njeik').subscribe(
      (data) => {
        
        console.log(data);

        this.loader = false;
        this.fetchReport(this.reportId);
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000)
      },
      (error) => {
        console.error('Error resolving report:', error);
        this.loader = false
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 3000)
      }
    );
}
}

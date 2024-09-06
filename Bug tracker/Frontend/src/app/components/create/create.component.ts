import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  reportForm!: FormGroup;
  loader: boolean = false;
  success: boolean = false
  error: boolean = false

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      title:['', [Validators.required, Validators.minLength(3)]],
      type: ['bug', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      severity: ['low', Validators.required],
      createdBy: [''],
      lastOcurrence: ['',Validators.required],
    });

    // Show lastOccurrenceDate only when type is "bug"
    this.reportForm.get('type')?.valueChanges.subscribe((type) => {
      if (type === 'bug') {
        this.reportForm.get('lastOcurrence')?.setValidators(Validators.required);
      } else {
        this.reportForm.get('lastOcurrence')?.clearValidators();
      }
      this.reportForm.get('lastOcurrence')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.reportForm.valid) {
      this.reportForm.get('createdBy')?.patchValue('bless')
      this.loader = true
      console.log(this.reportForm.value)
      const apiUrl = 'http://localhost:3000/api/add'
        this.http.post(apiUrl, this.reportForm.value).subscribe(
          (response: any) => {
            console.log('response', response)
            this.loader = false
            this.reportForm.reset()
            this.success = true
            setTimeout(() => {
              this.success = false
            }, 3000)
          },
          (error) => {
            console.error('There was an error submitting the report!', error);
            this.loader = false
            this.error = true
            setTimeout(() => {
              this.error = false
            }, 3000)

          }
        );
    
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.style.css'],
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService)
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this .form.getRawValue();
    this.authService
    .register(rawForm.email,rawForm.username,rawForm.password)
    .subscribe({
      next:() => {
      this.router.navigateByUrl('/login');
    },
    error: (err) => {
      this.errorMessage= err.code;
    }
  });
  }
  goToLogin(): void {
    this.router.navigateByUrl('login'); // Navigate to login page
  }
}

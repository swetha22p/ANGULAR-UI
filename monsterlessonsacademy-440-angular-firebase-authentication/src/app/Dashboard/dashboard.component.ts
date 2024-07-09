import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.styles.css']
})
export class DashboardComponent implements OnInit {
  username: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Assuming you have a way to get the current user, e.g., from a service
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      this.username = currentUser.username;
    }
  }

  getCurrentUser() {
    // Replace this with the actual method to get the current user from your auth service
    const user = {
      username: 'John Doe'
    };
    return user;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); // Navigate to your desired route after logout
  }
}

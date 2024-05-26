import { Component } from '@angular/core';
// import { AuthService } // Replace with your Authentication Service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;


  // constructor(private authService: AuthService) {}

  login() {
    // Implement login logic using your AuthService
    // this.authService.login(this.username, this.password)
    //   .subscribe(
    //     (data) => {
    //       // Login successful, navigate to appropriate route
    //       this.router.navigate(['/']);
    //     },
    //     (error) => {
    //       // Handle login errors (display message etc.)
    //     }
    //   );
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = 'treproducao17@uni.prof.hr';
  password = 'defaultpassword';

  constructor(private http: HttpClient, private cookieService: CookieService, private snackBar: MatSnackBar, private router: Router) {
  }

  loginClick() {
    const payload = {
      email: this.email,
      password: this.password
    };

    this.http.post<{ accessToken: string }>('http://localhost:3000/auth/login', payload)
      .subscribe({

        next: (response) => {
          console.log('Response:', response);
          const token = response.accessToken;
          this.cookieService.set('jwt', token);
          this.router.navigate(['/courses']);

        },

        error: () => {
          this.snackBar.open('Wrong email or password!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }

      });
  }
}

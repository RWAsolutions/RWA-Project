import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {merge} from 'rxjs';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

/** @title Form field appearance variants */
@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrl: 'form.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  providers: [CookieService]
})
export class FormComponent {
  
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor(private http: HttpClient, private cookieService: CookieService) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  password = new FormControl('', [Validators.required]);

  onSave() {
    const payload = {
      email: this.email.value,
      password: this.password.value
    };

    this.http.post<{ accessToken: string }>('http://localhost:3000/auth/login', payload)
      .subscribe({
        next: (response) => {
          console.log('Response:', response);
          const token = response.accessToken;
          this.cookieService.set('jwt', token);

        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
  }
}
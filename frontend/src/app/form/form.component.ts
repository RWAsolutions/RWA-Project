import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { merge } from 'rxjs';
import { Component, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrl: 'form.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatSlideToggleModule,
  ],
  providers: [CookieService],
})
export class FormComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  readonly dialog = inject(MatDialog);


  errorMessage = '';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
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

  openDialog(): void {
    //console.log("dialog opened");
    this.dialog.open(DialogComponent, {
      width: '250px',
    });
  }

  password = new FormControl('', [Validators.required]);

  @ViewChild('passwordInput') passwordInput: any;
  onEnterPressedEmail() {
    // Check if the password field is empty
    if (this.password.value === '') {
      // Focus on the password input field
      this.password.markAllAsTouched();
      this.passwordInput.nativeElement.focus();
      this.snackBar.open("Password can't be empty!", 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }

  onEnterPressedPassword() {
    this.onSave();
  }

  onSave() {
    const payload = {
      email: this.email.value,
      password: this.password.value,
    };

    this.http
      .post<{ accessToken: string }>(
        'http://localhost:3000/login',
        payload
      )
      .subscribe({
        next: (response) => {
          //console.log('Response:', response);
          const token = response.accessToken;
          this.cookieService.set('jwt', token);

          this.router.navigate(['/home']);
        },

        error: () => {
          this.snackBar.open('Wrong email or password!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },

      });
  }
}

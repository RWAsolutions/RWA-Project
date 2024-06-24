import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatOptionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CookieService],
})
export class HeaderComponent implements OnInit {
  @ViewChild('animatedInput') animatedInput: any;
  isInputFocused: boolean = false;
  isProfesor: boolean = false;
  isEditMode: boolean = false;
  searchTerm: string = '';

  constructor(
    library: FaIconLibrary,
    private router: Router,
    private cookieService: CookieService
  ) {
    library.addIcons(faMagnifyingGlass);
  }

  editClicked(): void {
    this.isEditMode = !this.isEditMode;
    //console.log('Edit mode:', this.isEditMode ? 'On' : 'Off');
  }

  ngOnInit(): void {
    const role = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(role);
    if (jwtPayload.role === 'profesor') {
      this.isProfesor = true;
    }
  }

  private decodeJWT(token: string): any {
    const payload = token.split('.')[1];
    let decodedPayload: any = {};
    try {
      decodedPayload = JSON.parse(atob(payload));
    } catch (e) {
      console.log('Invalid JWT token');
      decodedPayload.studentID = -1;
      decodedPayload.profesorID = -1;
    }
    return decodedPayload;
  }

  searchClicked() {
    if (this.animatedInput && this.animatedInput.nativeElement) {
      this.animatedInput.nativeElement.focus();
    }
  }

  searchFocused() {
    this.isInputFocused = true;
  }

  searchBlurred() {
    this.isInputFocused = false;
    this.animatedInput.nativeElement.value = '';
    this.searchTerm = '';
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    console.log(this.searchTerm);
  }

  homeClicked() {
    this.router.navigate(['/home']);
  }

  myStudyClicked() {
    window.open('/my-study', '_blank');
  }

  testsClicked() {
    this.router.navigate(['/tests']);
  }

  profesorsClicked() {
    if (!this.isProfesor) {
      window.open('/profesors', '_blank');
    } else {
      window.open('/students', '_blank');
    }
  }

  profilClicked() {
    this.router.navigate(['/profile']);
  }

  odjavaClicked() {
    this.router.navigate(['/login']);
  }

  settingsClicked() {
    this.router.navigate(['/settings']);
  }

  clearCookies() {
    this.cookieService.deleteAll();
  }
}

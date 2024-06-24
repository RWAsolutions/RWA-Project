import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';
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
  styleUrl: './header.component.scss',
  providers: [CookieService],
})
export class HeaderComponent implements OnInit {
  @ViewChild('animatedInput') animatedInput: any;

  isInputFocused: boolean = false;

  isProfesor: boolean = false;

  isEditMode: boolean = false;

  constructor(
    library: FaIconLibrary,
    private router: Router,
    private cookieService: CookieService
  ) {
    library.addIcons(faMagnifyingGlass);
  }

  editClicked(): void {
    this.isEditMode = !this.isEditMode;
    console.log('Edit mode:', this.isEditMode ? 'On' : 'Off');
  }

  ngOnInit(): void {
    const role = this.cookieService.get('role');
    if (role === 'profesor') {
      this.isProfesor = true;
    }
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
  }

  homeClicked() {
    this.router.navigate(['/home']);
  }

  myStudyClicked() {
    // ova metoda redirecta prema /tests u kojem se nalaze elementi izvedeni iz studomata
    console.log('MyStudy clicked');
  }

  testsClicked() {
    this.router.navigate(['/tests']);
    // implemmentiraj ovdje metodu za redirect prema stranici o studiju ovisno o tipu studija koji korisnik pohada
  }

  profesorsClicked() {
    this.router.navigate(['/profesors']);
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
}

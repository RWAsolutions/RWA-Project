import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ MatOptionModule, MatButtonModule, MatMenuModule, MatIconModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {

  @ViewChild('animatedInput') animatedInput: any;

  isInputFocused: boolean = false;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass);
  }

  searchClicked() {
    this.isInputFocused = true;
    if (this.animatedInput && this.animatedInput.nativeElement) {
      this.animatedInput.nativeElement.focus();
    }
  }

  searchFocused() {
    this.isInputFocused = true;
  }

  searchBlurred() {
    this.isInputFocused = false;
  }
}
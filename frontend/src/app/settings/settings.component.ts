import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [ CommonModule, FormsModule, HeaderComponent],
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
    fontSize: number = 14;
    highContrast: boolean = false;
    textToSpeech: boolean = false;
    emailNotifications: boolean = true;
    smsNotifications: boolean = false;
    themeColor: string = 'blue'; // New setting
    showIcons: boolean = true; // New setting
    animationLevel: string = 'medium'; // New setting
    backgroundImage: string = ''; // New setting

    constructor() {}

    resetSettings(): void {
        this.fontSize = 14;
        this.highContrast = false;
        this.textToSpeech = false;
        this.emailNotifications = true;
        this.smsNotifications = false;
        this.themeColor = 'blue'; // Reset new settings
        this.showIcons = true; // Reset new settings
        this.animationLevel = 'medium'; // Reset new settings
        this.backgroundImage = ''; // Reset new settings
    }

    changeFont() {
        console.log('Slider value changed to:', this.fontSize);
    }
}

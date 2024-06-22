import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  data: string = 'Hello World!';

  constructor() { }

  getData(): string {
    return this.data;
  }

  setData(data: string): void {
    this.data = data;
  }

}

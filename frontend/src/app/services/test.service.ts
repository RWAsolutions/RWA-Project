import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  data: string = 'Hello World!';

  constructor() { }

  getData(): string {
    return this.data;
  }

  setData(data: string): void {
    this.data = data;
  }

}

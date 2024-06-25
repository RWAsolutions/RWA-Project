import { Injectable, signal } from "@angular/core";

@Injectable()
export class DataSignalService {
    
    private data = signal('')

    //TODO finish later
    setData(update: string) {
        this.data.set(update)
    }

    getData() {
        return this.data
    }
}
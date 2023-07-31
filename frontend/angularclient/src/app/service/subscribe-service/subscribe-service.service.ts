import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  sottoscrizioni: Number[] = [];

  constructor() { }

  addId(id: Number): void{
    this.sottoscrizioni.push(id);
  }

  removeId(id: Number): void{
    this.sottoscrizioni.filter( (n) => n !== id );
  }

  checkIn(id: Number): boolean {
    return this.sottoscrizioni.includes(id);
  }

  getLista(): Number[] {
    return this.sottoscrizioni;
  }

}

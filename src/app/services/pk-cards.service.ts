import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class PkCardsService {

  url: string = "http://localhost:3000/cards";

  constructor(private http : HttpClient) { }

  getAllCards(): Observable<Array<Card>>{
    return this.http.get<Array<Card>>(this.url);
  }

  getCardById(id?: string) : Observable<Card>{
    console.log(id);
    return this.http.get<Card>(`${this.url}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Card } from '../models/cards';
import { PkCardsService } from '../services/pk-cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit{

  cards : Array<Card> = [];

  constructor(private pkcardsservice: PkCardsService) { }

  ngOnInit(): void {
    this.pkcardsservice.getAllCards().subscribe({
      next: data => {
        this.cards = data;
      },
      error: err => {
        alert('Failed to fetch the cards! Please try again');
      }
    });
  }
}

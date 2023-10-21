import { Component, OnInit } from '@angular/core';
import { Card } from '../models/cards';
import { PkCardsService } from '../services/pk-cards.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  cards : Card[] = [];

  constructor(private pkcardsservice: PkCardsService) { }

  ngOnInit(): void {
    this.pkcardsservice.getAllCards().subscribe({
      next: data => {
        this.cards = data;
      },
      error: err => {
        alert('Failed to fetch the cards, please try again !');
      },
    });
  }

}

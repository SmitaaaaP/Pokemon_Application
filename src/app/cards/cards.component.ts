import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  card! : Card;

  constructor() { }
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Card } from '../models/cards';
import { ActivatedRoute } from '@angular/router';
import { PkCardsService } from '../services/pk-cards.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit{

  card?: Card;
  stars: Array<number> = [];

  constructor(private activatedRoute: ActivatedRoute , private pkCardsService: PkCardsService){ }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      let id = param.get("id") ?? "";
      this.pkCardsService.getCardById(id).subscribe(data => {
        this.card = data;
        this.stars = new Array(this.card.rating);
      })
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid } from '@ionic/angular/standalone';

import { StockRepository } from 'src/app/repository/stock-repository';
import { Flavour } from 'src/app/data/flavour';
import { FlavourProductComponent } from '../flavour-product/flavour-product.component';

@Component({
  selector: 'app-make-ice-cream',
  templateUrl: './make-ice-cream.page.html',
  styleUrls: ['./make-ice-cream.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
    CommonModule, FormsModule,
    FlavourProductComponent
  ]
})
export class MakeIceCreamPage implements OnInit {

  constructor(private stockRepository: StockRepository) {}

  get flavours(): Flavour[] {
    return this.stockRepository.flavours;
  }

  ngOnInit() {}
}

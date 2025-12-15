import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockRepository } from 'src/app/repository/stock-repository';
import { Flavour } from 'src/app/data/flavour';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flavour-empty',
  templateUrl: './flavour-empty-page.page.html',
  styleUrls: ['./flavour-empty-page.page.scss'],
  standalone: true,
imports: [
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonInput,
  CommonModule,
  FormsModule
]
})
export class FlavourEmptyPage implements OnInit {

  flavour?: Flavour;
  signature = '';

  constructor(
    private route: ActivatedRoute,
    private stockRepository: StockRepository
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.flavour = this.stockRepository.getFlavour(name);
    }
  }

  get message(): string {
    return `${this.flavour?.name} flavour is empty`;
  }
}

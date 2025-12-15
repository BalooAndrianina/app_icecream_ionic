import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockRepository } from 'src/app/repository/stock-repository';
import { Flavour } from 'src/app/data/flavour';

import { MailService } from 'src/app/repository/mail-service';


import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonBackButton,
  IonButtons, IonLabel, IonList, IonItem, IonCheckbox
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
  FormsModule, IonLabel, IonList, IonItem, IonCheckbox
]
})
export class FlavourEmptyPage implements OnInit {

  flavour?: Flavour;
  signature = '';

  constructor(
    private route: ActivatedRoute,
    private stockRepository: StockRepository,
    private mailService: MailService
  ) {}


  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.flavour = this.stockRepository.getFlavour(name);
    }
    if (this.flavour) {
      // le parfum courant est sélectionné et bloqué
      this.selectedItems[this.flavour.name] = true;
    }

  }

  
  get flavours() {
    return this.stockRepository.flavours;
  }

  get containers() {
    return this.stockRepository.containers;
  }

  get extras() {
    return this.stockRepository.extras;
  }


  get message(): string {
    return `${this.flavour?.name} flavour is empty`;
  }

  private buildOrderBody(): string {
    const sig = this.signature?.trim() || '';
    return [
      'Hi ,',
      '',
      'Please order the following :',
      `* ${this.flavour?.name} icecream`,
      '',
      `Thanks , ${sig}`
    ].join('\n');
  }

  private getSelectedItems(): string[] {
    return Object.entries(this.selectedItems)
      .filter(([_, selected]) => selected)
      .map(([name]) => name);
  }
  private buildMultiOrderBody(): string {
    const items = this.getSelectedItems();

    return [
      'Hi ,',
      '',
      'Please order the following :',
      ...items.map(i => `* ${i}`),
      '',
      `Thanks , ${this.signature || ''}`
    ].join('\n');
  }

  orderAll(): void {
    const items = this.getSelectedItems();
    if (items.length === 0) {
      return;
    }

    this.mailService.send({
      to: 'order@icecream.com',
      subject: 'Order',
      body: this.buildMultiOrderBody()
    });
  }


  order(): void {
    if (!this.flavour) {
      return;
    }

    this.mailService.send({
      to: 'order@icecream.com',
      subject: 'Order',
      body: this.buildOrderBody()
    });
  }
  // affichage / masquage
showAllItems = false;

// sélection des éléments à commander
selectedItems: Record<string, boolean> = {};


  
}

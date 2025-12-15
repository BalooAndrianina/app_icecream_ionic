import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonButton } from '@ionic/angular/standalone';

import { StockRepository } from 'src/app/repository/stock-repository';
import { Flavour } from 'src/app/data/flavour';
import { FlavourProductComponent } from '../flavour-product/flavour-product.component';
import { ContainerSelectorComponent } from '../components/container-selector/container-selector.component';
import { Container } from 'src/app/data/container';
import { Extras } from 'src/app/data/extras';
import { ExtrasSelectorComponent } from '../components/extras-selector/extras-selector.component';

@Component({
  selector: 'app-make-ice-cream',
  templateUrl: './make-ice-cream.page.html',
  styleUrls: ['./make-ice-cream.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
    CommonModule, FormsModule,
    FlavourProductComponent, ContainerSelectorComponent, ExtrasSelectorComponent, IonButton
  ]
})
export class MakeIceCreamPage implements OnInit {

  constructor(private stockRepository: StockRepository) {}

  get flavours(): Flavour[] {
    return this.stockRepository.flavours;
  }

  //Liste des contenants disponibles
    containers: Container[] = [
    { name: 'cone', label: 'Cone', price: 1 },
    { name: 'cup',  label: 'Cup',  price: 0 }
  ];

  //Sélection courante
  selectedContainer: 'cone' | 'cup' = 'cup';

  //liste des extras disponibles
  extrasOptions: Extras[] = [
    { key: 'whippedCream', label: 'Whipped Cream', price: 0.95 },
    { key: 'hazelnuts', label: 'Hazelnuts', price: 1.30 }
  ];

  selectedExtras = {
    whippedCream: false,
    hazelnuts: false
  };

  // Calcul du nombre total de boules sélectionnées
  get totalScoops(): number {
    return this.flavours.reduce(
      (sum, flavour) => sum + flavour.quantity,
      0
    );
  }
  // Calcul du prix total des boules sélectionnées
  get scoopsPrice(): number {
    const scoops = this.totalScoops;

    switch (scoops) {
      case 1: return 1.5;
      case 2: return 3;
      case 3: return 4;
      case 4: return 5;
      case 5: return 5.5;
      default: return 0;
    }
  }

// Calcul du prix DES contenants sélectionnés
  get containerPrice(): number {
    return this.selectedContainer === 'cone' ? 1 : 0;
  }

  // Calcul du prix DES extras sélectionnés
  get extrasPrice(): number {
    let price = 0;

    if (this.selectedExtras.whippedCream) {
      price += 0.95;
    }

    if (this.selectedExtras.hazelnuts) {
      price += 0.95;
    }

    return price;
  }

  // Calcul du prix total de la commande
  get totalPrice(): number {
    return (
      this.scoopsPrice +
      this.containerPrice +
      this.extrasPrice
    );
  }

  // Vérification si la commande peut être passée
  get canMakeIceCream(): boolean {
    return this.totalScoops > 0 && this.totalScoops <= 5;
  }

  get tooManyScoops(): boolean {
    return this.totalScoops > 5;
  }
  makeIceCream(): void {
    if (!this.canMakeIceCream) {
      return;
    }

    this.stockRepository.makeIceCream(
      this.selectedContainer,
      this.selectedExtras
    );

    // reset UI uniquement
    this.selectedContainer = 'cup';
    this.selectedExtras = {
      whippedCream: false,
      hazelnuts: false
    };
  }


  ngOnInit() {}
}

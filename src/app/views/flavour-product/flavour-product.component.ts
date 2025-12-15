import { Component, Input, OnInit } from '@angular/core';
import {IonRow, IonCol, IonLabel, IonButton} from '@ionic/angular/standalone';
import { Flavour } from 'src/app/data/flavour';
import { Container } from 'src/app/data/container';
import { Extras } from 'src/app/data/extras';


@Component({
  selector: 'app-flavour-product',
  templateUrl: './flavour-product.component.html',
  styleUrls: ['./flavour-product.component.scss'],
  standalone: true,
  imports : [IonRow , IonCol , IonLabel, IonButton]
})
export class FlavourProductComponent {

  @Input() flavour!: Flavour;


  onAdd() {
    if (this.flavour.stock >= 50) {
      this.flavour.quantity++;
      this.flavour.stock -= 50;
    }
  }

  onSub() {
    if (this.flavour.quantity > 0) {
      this.flavour.quantity--;
      this.flavour.stock += 50;
    }
  }

  onAlert() {
    alert("stock insuffisant !");
  }
}
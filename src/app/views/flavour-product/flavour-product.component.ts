import { Component, Input, OnInit } from '@angular/core';
import {IonRow, IonCol, IonLabel} from '@ionic/angular/standalone';
import { Flavour } from 'src/app/data/flavour';
import { Container } from 'src/app/data/container';
import { Extras } from 'src/app/data/extras';


@Component({
  selector: 'app-flavour-product',
  templateUrl: './flavour-product.component.html',
  styleUrls: ['./flavour-product.component.scss'],
  standalone: true,
  imports : [IonRow , IonCol , IonLabel ]
})
export class FlavourProductComponent{

  @Input() flavour!: Flavour;

}

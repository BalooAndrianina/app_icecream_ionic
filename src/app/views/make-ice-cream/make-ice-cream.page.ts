import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-make-ice-cream',
  templateUrl: './make-ice-cream.page.html',
  styleUrls: ['./make-ice-cream.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MakeIceCreamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

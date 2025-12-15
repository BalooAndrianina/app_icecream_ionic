import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Container } from 'src/app/data/container';

@Component({
  selector: 'app-container-selector',
  templateUrl: './container-selector.component.html',
  styleUrls: ['./container-selector.component.scss'],
  standalone: true,
  imports: [ IonRadioGroup, IonRadio, IonItem, IonLabel, CommonModule,FormsModule
  ]
})
export class ContainerSelectorComponent {

  @Input() containers!: Container[];
  @Input() selected!: 'cone' | 'cup';
  @Output() selectedChange = new EventEmitter<'cone' | 'cup'>();

}

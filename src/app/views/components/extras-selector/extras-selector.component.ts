import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  IonCheckbox,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Extras } from 'src/app/data/extras';

@Component({
  selector: 'app-extras-selector',
  templateUrl: './extras-selector.component.html',
  styleUrls: ['./extras-selector.component.scss'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonItem,
    IonLabel,
    CommonModule
  ]
})
export class ExtrasSelectorComponent {

  @Input() extras!: Extras[];

  @Input() selected!: {
    whippedCream: boolean;
    hazelnuts: boolean;
  };

  @Output() selectedChange =
    new EventEmitter<{ whippedCream: boolean; hazelnuts: boolean }>();

  onToggleExtra(key: 'whippedCream' | 'hazelnuts', checked: boolean) {
  this.selectedChange.emit({
    ...this.selected,
    [key]: checked
  });
}

}

import { Injectable } from '@angular/core';
import { ExtrasStock } from '../data/extras-stock';
import { ContainerStock } from '../data/container-stock';
import { Flavour } from '../data/flavour';
import { StockRepository } from './stock-repository';


@Injectable({
  providedIn: 'root',
})
export class StockRepositoryDummyImpl extends StockRepository{

  public flavours: Flavour[] = [
    {name: "vanille", image: "assets/images/vanilla.jpg", stock: 300, quantity: 0, unit: "ml"},
    {name: "pistachio", image: "assets/images/pistachio.jpg", stock: 250, quantity: 0,unit: "ml"},
    {name: "chocolat", image: "assets/images/chocolate.jpg",stock: 200, quantity: 0,unit: "ml"}
  ];

  public containers: ContainerStock[] = [
    { name: "cups", quantity: 5 },
    { name: "cones", quantity: 5 }
  ];
  
  public extras: ExtrasStock[] = [
    { name: 'Whipped Cream', quantity: 100, unit: 'ml' },
    { name: 'HazelNuts', quantity: 100, unit: 'g' }
  ];

  public override getFlavour(name: string): Flavour | undefined {
    return this.flavours.find(f => f.name === name);
  }

  public override makeIceCream(
    selectedContainer: 'cone' | 'cup',
    selectedExtras: {
      whippedCream: boolean;
      hazelnuts: boolean;
    }
  ): void {

  
    this.flavours.forEach(flavour => {
      const usedVolume = flavour.quantity * 50;
      flavour.stock = Math.max(0, flavour.stock - usedVolume);
      flavour.quantity = 0; // reset quantité
    });


    const container = this.containers.find(
      c => c.name === (selectedContainer === 'cone' ? 'cones' : 'cups')
    );

    if (container) {
      container.quantity = Math.max(0, container.quantity - 1);
    }


    if (selectedExtras.whippedCream) {
      const wc = this.extras.find(e => e.name === 'Whipped Cream');
      if (wc) {
        wc.quantity = Math.max(0, wc.quantity - 75);
      }
    }

    if (selectedExtras.hazelnuts) {
      const hz = this.extras.find(e => e.name === 'HazelNuts');
      if (hz) {
        hz.quantity = Math.max(0, hz.quantity - 5);
      }
    }
  }

}

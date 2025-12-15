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
}

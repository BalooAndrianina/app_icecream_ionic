import { Flavour } from "../data/flavour";
import { ContainerStock } from "../data/container-stock";
import { ExtrasStock } from "../data/extras-stock";

export abstract class StockRepository {
    public abstract flavours: Flavour[];
    public abstract containers: ContainerStock[];
    public abstract extras: ExtrasStock[];

    public abstract getFlavour(name: string): Flavour | undefined;
    public abstract makeIceCream(
    selectedContainer: 'cone' | 'cup',
    selectedExtras: {
      whippedCream: boolean;
      hazelnuts: boolean;
    }
  ): void;
}

import { Container } from "../data/container";
import { Extras } from "../data/extras";
import { Flavour } from "../data/flavour";
import { ContainerStock } from "../data/container-stock";

export abstract class StockRepository {
    public abstract flavours: Flavour[];
    public abstract containers: ContainerStock[];
    public abstract extras: Extras[];
}

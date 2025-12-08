import { Container } from "../data/container";
import { Extras } from "../data/extras";
import { Flavour } from "../data/flavour";

export abstract class StockRepository {
    public abstract flavours: Flavour[];
    public abstract containers: Container[];
    public abstract extras: Extras[];
}

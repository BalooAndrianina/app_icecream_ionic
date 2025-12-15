import { OrderMail } from '../data/order-mail';

export abstract class MailService {
  public abstract send(mail: OrderMail): Promise<void>;
}

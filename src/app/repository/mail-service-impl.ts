import { Injectable } from '@angular/core';
import { MailService } from './mail-service';
import { OrderMail } from '../data/order-mail';

@Injectable({ providedIn: 'root' })
export class MailServiceImpl extends MailService {
  public async send(mail: OrderMail): Promise<void> {
    // Ouvre le client mail (web + mobile)
    const mailto =
      `mailto:${encodeURIComponent(mail.to)}` +
      `?subject=${encodeURIComponent(mail.subject)}` +
      `&body=${encodeURIComponent(mail.body)}`;

    window.location.href = mailto;
  }
}

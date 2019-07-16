import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../core/models/contact.interface';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  constructor() { }

  contact: Contact;

  ngOnInit() {
  }

}

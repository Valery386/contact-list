import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, ContactList } from '../../../core/models/contact.interface';
import { ContactListService } from '../../../core/services/contact-list.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService: ContactListService) { }

  contacts: Array<Contact>;

  ngOnInit() {
    this.contactService.getContacts().subscribe(info => {
      this.contacts = info;
      console.log('info: ' + info);
    });
  }

  deleteContact(contact : Contact) {
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

}

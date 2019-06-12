import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { Location } from '@angular/common';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contactsService.getContact(id)
    .subscribe(contact => {
        this.contact = contact;
    });
  }

  public save(contact: Contact) {
    this.contactsService.updateContact(contact)
    .subscribe( s => {
      this._location.back();
    });
  }
  public cancel(contact: Contact) {
    this._location.back();
  }

}

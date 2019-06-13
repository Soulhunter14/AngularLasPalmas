import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { Location } from '@angular/common';
import { EventBusService } from '../services/event-bus.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { UpdateContactAction, SelectContactAction } from '../state/contacts/contacts.actions';
import { ApplicationState } from '../state-management/root-reducer';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact$: Observable<Contact>;
  savedChanges: Boolean;

  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute,
    private _location: Location,
    private eventBus: EventBusService,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new SelectContactAction(params["id"]));
    });

    this.contact$ = this.store.pipe(
      select(s => s.contacts.list.find(contact => contact.id == s.contacts.selectedContactId)),
      map(contact => ({...contact})),
      tap(console.log)
      );
  }

  public save(contact: Contact) {
    this.contactsService.updateContact(contact)
    .subscribe( s => {
      this.savedChanges = true;
      this.store.dispatch(new UpdateContactAction(contact));
      this._location.back();
    });
  }
  public cancel(contact: Contact) {
    this._location.back();
  }

}

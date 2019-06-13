import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from './../models/contact';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { EventBusService } from '../services/event-bus.service';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../state-management/root-reducer';
import { LoadContactsSuccessAction } from '../state/contacts/contacts.actions';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush // Input changed, event triggered , manual triggering (like async)
})

export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService,
    private eventBus: EventBusService,
    private store: Store<ApplicationState>) {  }

  ngOnInit() {
    let query = (state) => state.contacts.list;
    this.contacts$ = this.store.pipe(select(query));

    this.contactsService
      .getContacts()
      .subscribe(contacts => {
        this.store.dispatch(
          new LoadContactsSuccessAction(contacts)
        );
      });
    this.eventBus.emit('appTitleChange', 'List');

    this.terms$.subscribe(
    term => {
      this.eventBus.emit('appTitleChange', 'List');
      this.contacts$ = this.store.select( state => state.contacts.list.filter(c => c.name.indexOf(term) > -1) );
    });
  }
}

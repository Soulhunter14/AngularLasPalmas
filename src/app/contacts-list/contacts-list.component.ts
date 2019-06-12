import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from './../models/contact';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Input changed, event triggered , manual triggering (like async)
})

export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;
  terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService,
    private eventBus: EventBusService) {  }

  ngOnInit() {
    this.contacts$ = this.terms$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      startWith(''),
      switchMap(term => this.contactsService.searchContacts(term)));
      this.eventBus.emit('appTitleChange', 'List');
  }
}

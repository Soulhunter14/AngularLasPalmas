import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs';
import { EventBusService } from '../services/event-bus.service';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../state-management/root-reducer';
import { LoadContactsSuccessAction, SelectContactAction } from '../state/contacts/contacts.actions';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(private router: Router,
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private eventBus: EventBusService,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new SelectContactAction(params["id"]));
    });

    this.contact$ = this.store.pipe(select(state => {
      let id = state.contacts.selectedContactId;
      return state.contacts.list.find(contact => contact.id == id);
      }));
  }

  navigateToList() {
    this.router.navigate(['']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit']);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs';
import { EventBusService } from '../services/event-bus.service';

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
    private eventBus: EventBusService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
    this.eventBus.emit('appTitleChange', 'Contact');
  }

  navigateToList() {
    this.router.navigate(['']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit']);
  }
}

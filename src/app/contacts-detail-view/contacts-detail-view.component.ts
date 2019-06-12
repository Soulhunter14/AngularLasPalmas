import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(private router: Router, private contactsService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.contact$ = this.contactsService.getContact(id);
  }

  navigateToList() {
    this.router.navigate(['']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit']);
  }
}

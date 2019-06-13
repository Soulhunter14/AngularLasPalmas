import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { take, mergeMap, tap, map } from 'rxjs/operators';
import { ApplicationState } from '../state-management/root-reducer';
import { ContactsService } from '../services/contacts.service';
import { AddContactAction, SelectContactAction } from '../state/contacts/contacts.actions';
import { Contact } from '../models/contact';

@Injectable()
export class ContactExistsGuard implements CanActivate {

  constructor(private store: Store<ApplicationState>,
    private contactsService: ContactsService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const contactId = next.paramMap.get('id');
    this.store.dispatch(new SelectContactAction(parseInt(contactId)));

    const loaded = this.store.pipe(
      select( s => s.contacts.loaded),
      take(1));

      const addContactToList = (contact: Contact) => {
      this.store.dispatch(new AddContactAction(contact));
    };

    return loaded ? of(true) : this.contactsService
      .getContact(contactId).pipe(
        tap(addContactToList),
        map(contact => !!contact)
    );
  }
}

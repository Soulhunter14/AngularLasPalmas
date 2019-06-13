import { ContactsEditorComponent } from '../contacts-editor/contacts-editor.component';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ContactsService } from '../services/contacts.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SelectContactAction } from '../state/contacts/contacts.actions';
import { take, mergeMap } from 'rxjs/operators';
import { ApplicationState } from '../state-management/root-reducer';

export function confirmNavigationGuard(component: ContactsEditorComponent) {

  if (!component.savedChanges) { return window.confirm('Are you sure?'); }

  return true;
  }

  // @Injectable()
  // export class ContactExistsGuard implements CanActivate {
  //   constructor(private store: Store<ApplicationState>) {}

  //   canActivate(route: ActivatedRouteSnapshot) {
  //     let contactId = route.paramMap.get('id');
  //     this.store.dispatch(new SelectContactAction(+contactId));

  //     return this.store.pipe(
  //         select(state => state.contacts.loaded),
  //         take(1),
  //         mergeMap(resolveOrAddContactToList)
  //       );
  //   }
  // }

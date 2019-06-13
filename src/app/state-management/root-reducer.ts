import { contactsReducer, ContactsState } from '../state/contacts/contacts.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface ApplicationState {
  contacts: ContactsState;
}

export const ROOT_REDUCER
  : ActionReducerMap<ApplicationState> = {
      contacts: contactsReducer
};

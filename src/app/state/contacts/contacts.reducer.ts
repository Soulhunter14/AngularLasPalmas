import { ContactsActionTypes, ContactsActions } from './contacts.actions';
import { Contact } from '../../models/contact';

export interface ContactsState {
  list: Array<Contact>;
  selectedContactId: number;
  loaded: boolean;
}
const INITAL_STATE: any = {list: []};

export function contactsReducer(state = INITAL_STATE, action: ContactsActions ) {
  switch (action.type) {
    case ContactsActionTypes.LOAD_CONTACTS_SUCCESS:
      return {
        ...state, list: action.payload, loaded: true
      };
    case ContactsActionTypes.SELECT_CONTACT:
      return { ...state, selectedContactId: action.payload };

    case ContactsActionTypes.UPDATE_CONTACT:
      let updatedList = state.list.map(contact => {
        return contact.id == action.payload.id
          ? { ...contact, ...action.payload }
          : contact;
        });
      return { ...state, list: updatedList };

    case ContactsActionTypes.ADD_CONTACT:
      let inStore = state.list.find(contact => { return contact.id == action.payload.id;
        });
      return { ...state, list: !inStore ? [...state.list, action.payload] : state.list };
  }
  return state;
}

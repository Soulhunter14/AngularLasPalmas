import { ContactsEditorComponent } from './../contacts-editor/contacts-editor.component';

export function confirmNavigationGuard(component: ContactsEditorComponent) {

  if (!component.savedChanges) { return window.confirm('Are you sure?'); }

  return true;
  }


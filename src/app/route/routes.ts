import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { ContactsDetailViewComponent } from '../contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from '../contacts-editor/contacts-editor.component';
import { AboutComponent } from '../about/about.component';
import { ContactsDasboardComponent } from '../contacts-dasboard/contacts-dasboard.component';

export const APP_ROUTES = [
  {
    path: '',
    component: ContactsDasboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactsDetailViewComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent, canDeactivate: ['ConfirmNavigationGuard'] }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

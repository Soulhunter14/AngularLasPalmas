import { ContactsDetailViewComponent } from '../contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from '../contacts-editor/contacts-editor.component';
import { AboutComponent } from '../about/about.component';
import { ContactsDasboardComponent } from '../contacts-dasboard/contacts-dasboard.component';
import { ContactExistsGuard } from '../guards/contact-exists.guard';

export const APP_ROUTES = [
  {
    path: '',
    component: ContactsDasboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactsDetailViewComponent, canActivate: [ContactExistsGuard]  },
      { path: 'contact/:id/edit', component: ContactsEditorComponent, canActivate: [ContactExistsGuard] ,
       canDeactivate: ['ConfirmNavigationGuard'] }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

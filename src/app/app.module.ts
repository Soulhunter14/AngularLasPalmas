import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsMaterialModule } from './contacts-material.module';
import { MatTabsModule } from '@angular/material/tabs';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './route/routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsService } from './services/contacts.service';
import { EventBusService } from './services/event-bus.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

import { FormsModule } from '@angular/forms';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { AboutComponent } from './about/about.component';
import { ContactsDasboardComponent } from './contacts-dasboard/contacts-dasboard.component';

@NgModule({
  declarations: [ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabComponent,
    TabsComponent,
    AboutComponent,
    ContactsDasboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    MatTabsModule
  ],
  providers : [ContactsService, EventBusService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}

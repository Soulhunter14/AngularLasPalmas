import { Contact } from '../models/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface ContactResponse  { item: Contact; }
interface ContactsResponse { items: Contact[]; }

@Injectable()
export class ContactsService {
  private contacts:  Observable<Array<Contact>>;
  private API_ENDPOINT: String = "http://localhost:4201";

  constructor(private http: HttpClient) { }


  getContacts() : Observable<Array<Contact>>  {
    let url = this.API_ENDPOINT + '/api/contacts';
    this.contacts= this.http.get<ContactsResponse>(url)
      .pipe(map(data => data.items));
    return this.contacts;
  }

  getContact(id: String) {
    let url = this.API_ENDPOINT + '/api/contacts/' + id;
    return this.http.get<ContactResponse>(url)
      .pipe(map(data => data.item));
  }

  updateContact(contact: Contact) {
    let url = this.API_ENDPOINT + '/api/contacts/' + contact.id;
    return this.http.put<ContactResponse>(url, contact)
    .pipe();
  }

  searchContacts(search: String): Observable<Array<Contact>>  {
    let url = this.API_ENDPOINT + '/api/search?text=' + search;
    return this.http.get<ContactsResponse>(url)
      .pipe(map(data => data.items));
  }

}

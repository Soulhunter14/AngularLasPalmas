import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from './../models/contact';
import { Location } from '@angular/common';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<Contact>();

  constructor() {
  }
  ngOnInit() { }

}

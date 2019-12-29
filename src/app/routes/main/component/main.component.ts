import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';
import Contact, { ContactsResponse } from '../models/contact.types';
import { faChevronDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {  
  private id: number;
  private limit: number;

  public contacts: Array<Contact>;
  public sortedContacts: Array<Contact>
  public noData: boolean; 
  public filterForm : FormGroup;

  public activeRow: number;
  public sortedBy: string;

  private reverse: boolean;

  constructor(private contactsService: ContactsService, private formBuilder: FormBuilder, library: FaIconLibrary) {
    library.addIcons(faChevronDown, faSort);
  }
  
  onClick(row) {
    this.activeRow = this.activeRow === row ? -1 : row;
  }

  sortContacts(sortBy: 'id' | 'name' | 'address' | 'roles' | 'insertByID' | 'email' = 'id') {

    if(this.sortedBy === sortBy) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }

    if(this.reverse) {

      switch (sortBy) {
        case 'roles': {
            this.sortedContacts = this.contacts.sort((a, b) => Object.keys(b.roles).length - Object.keys(a.roles).length);
            break;
        }
        case 'address': {
          this.sortedContacts = this.contacts.sort((a, b) => b.address.countryID - a.address.countryID);
          break;
        }
        default: this.sortedContacts = this.contacts.sort((a, b) => b[sortBy] < a[sortBy] ? -1 : 1)
      }

    } else {

      switch (sortBy) {
        case 'roles': {
            this.sortedContacts = this.contacts.sort((a, b) => Object.keys(a.roles).length - Object.keys(b.roles).length);
            break;
        }
        case 'address': {
          this.sortedContacts = this.contacts.sort((a, b) => a.address.countryID - b.address.countryID);
          break;
        }
        default: this.sortedContacts = this.contacts.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1)
      }

    }
  

    this.sortedBy = sortBy;

  }

  onFilter() {
    this.contactsService.getContacts({limit: this.limit, qry: this.filterForm.get('filter').value}).subscribe((res: ContactsResponse) => {
      const newContacts = Object.keys(res.items).map((key) => res.items[key]);
      this.contacts = newContacts;

      this.sortContacts();

      this.id = newContacts[0] && newContacts[0].id;
      this.noData = this.contacts.length < this.limit ? true : false;

    })
  }

  getContacts() {
    this.contactsService.getContacts({limit: this.limit, beforeID: this.id, qry: this.filterForm.get('filter').value}).subscribe((res: ContactsResponse) => {
      const newContacts = Object.keys(res.items).map((key) => res.items[key]);
      this.contacts.push(...newContacts);

      this.sortContacts();

      this.id = newContacts[0] && newContacts[0].id;
      this.noData = this.contacts.length < this.limit ? true : false;
    })
  }

  ngOnInit() {    
    this.id = 0;
    this.limit = 20;
    this.contacts = [];
    this.sortedContacts = [];
    this.noData = false;

    this.filterForm = this.formBuilder.group({
      "filter": [""]
    });

    this.filterForm.get('filter').valueChanges.pipe(debounceTime(150)).subscribe(this.onFilter.bind(this));

    this.getContacts();
  }
}

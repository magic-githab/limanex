import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/services';

@Component({
  selector: 'app-contacts-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public isLoading: boolean;

  constructor(private contactsService: ContactsService) {}

  getContacts = () => {
    this.isLoading = true;
    this.contactsService.getContacts();
  };

  ngOnInit() {
    this.contactsService.contacts.subscribe(() => (this.isLoading = false));
  }
}

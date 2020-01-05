import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/routes/main/services/contacts/contacts.service';

@Component({
  selector: 'app-main-contacts-root',
  templateUrl: './main-contacts.component.html',
  styleUrls: ['./main-contacts.component.scss']
})
export class MainContactsComponent implements OnInit {
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

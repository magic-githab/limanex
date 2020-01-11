import { Component, OnInit } from '@angular/core';
import { ContactsService, ModalsService } from '@services/.';

@Component({
  selector: 'app-contacts-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public isLoading: boolean;

  constructor(
    private contactsService: ContactsService,
    private modalsService: ModalsService
  ) {}

  public getContacts = () => {
    this.isLoading = true;
    this.contactsService.getContacts().subscribe(() => {
      this.isLoading = false;
    });
  };

  public openCreateContact = () =>
    this.modalsService.openModal('createContact');

  ngOnInit() {
    this.getContacts();
  }
}

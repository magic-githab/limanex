import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/services';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-contacts-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public isLoading: boolean;

  constructor(
    private contactsService: ContactsService,
    private ngxSmartModalService: NgxSmartModalService
  ) {}

  public getContacts = () => {
    this.isLoading = true;
    this.contactsService.getContacts();
  };

  public openCreateContact = () => {
    this.ngxSmartModalService.getModal('createContact').open();
  };

  ngOnInit() {
    this.contactsService.contacts.subscribe(() => (this.isLoading = false));
  }
}

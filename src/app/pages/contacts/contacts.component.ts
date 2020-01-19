import { Component, OnInit } from '@angular/core';
import { ModalsService, ContactsService } from '@services/.';
import { Observable } from 'rxjs';
import { Contact } from '@models/.';

@Component({
  selector: 'app-contacts-root',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contacts$: Observable<Contact[]>;
  public isLoading$: Observable<boolean>;

  constructor(
    private modalsService: ModalsService,
    private contactsService: ContactsService
  ) {}

  public openCreateContact = () =>
    this.modalsService.openModal('createContact');

  public onScroll = () => this.contactsService.getContacts();

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
    this.isLoading$ = this.contactsService.isLoading;
  }
}

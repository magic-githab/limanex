import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts/contacts.service';
@Component({
  selector: 'app-main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public showSidebar = true;

  constructor(private contactsService: ContactsService) {}

  toogleSidebar = () => (this.showSidebar = !this.showSidebar);

  getContacts = () => this.contactsService.getContacts();
}

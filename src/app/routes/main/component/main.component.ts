import { Component, HostListener, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts/contacts.service';
@Component({
  selector: 'app-main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public showSidebar = true;

  constructor(private contactsService: ContactsService) {}
  isShowSidebar = () =>
    (this.showSidebar = window.innerWidth > 990 ? true : false);

  @HostListener('window:resize')
  onResize = () => this.isShowSidebar();

  toogleSidebar = () => (this.showSidebar = !this.showSidebar);

  getContacts = () => this.contactsService.getContacts();

  ngOnInit() {
    this.isShowSidebar();
  }
}

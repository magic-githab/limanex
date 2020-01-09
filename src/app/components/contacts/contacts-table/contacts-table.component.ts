import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from '@app/services/contacts.service';
import { Contact } from '@app/models';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  @Input() loading: boolean;

  public contacts$: Observable<Contact[]>;

  public activeRow: number;
  public showData: number;
  public noData = false;

  constructor(private contactsService: ContactsService) {}

  onClick = row => (this.activeRow = this.activeRow === row ? -1 : row);

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
  }
}

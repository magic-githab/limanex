import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Contact from '../../models/contacts.types';
import { ContactsService } from '@app/routes/main/services/contacts/contacts.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  public contacts$: Observable<Contact[]>;

  public activeRow: number;
  public showData: number;
  public noData = false;

  constructor(private contactsService: ContactsService) {}

  onClick = row => (this.activeRow = this.activeRow === row ? -1 : row);

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();
    this.contacts$.subscribe(res => {
      this.noData = res.length < this.contactsService.limit;
    });
  }
}

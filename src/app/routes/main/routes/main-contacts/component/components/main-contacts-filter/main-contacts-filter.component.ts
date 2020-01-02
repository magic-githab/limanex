import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/routes/main/services/contacts/contacts.service';

@Component({
  selector: 'app-main-contacts-filter',
  templateUrl: './main-contacts-filter.component.html',
  styleUrls: ['./main-contacts-filter.component.scss']
})
export class MainContactsFilterComponent implements OnInit {
  public filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {}

  onClickHandler = () =>
    this.contactsService.getContacts({
      qry: this.filterForm.get('filter').value,
      isFilter: true
    });

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      filter: ['']
    });
  }
}

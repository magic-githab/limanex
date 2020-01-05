import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactsService } from '@app/routes/main/services/contacts/contacts.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-main-contacts-filter',
  templateUrl: './main-contacts-filter.component.html',
  styleUrls: ['./main-contacts-filter.component.scss']
})
export class MainContactsFilterComponent implements OnInit {
  @ViewChild('filterInput', { static: false }) filterInput: ElementRef;

  public filterForm: FormGroup;
  public isSpinner: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {}

  public showIcon = () =>
    this.isSpinner
      ? 'spinner'
      : this.filterForm.get('filter').value
      ? 'times-circle'
      : 'search';

  public clearInput() {
    this.filterInput.nativeElement.focus();
    if (this.filterForm.get('filter').value) {
      this.filterForm.reset();
      this.onFilter();
    }
  }

  public onFilter = (val?) => {
    this.isSpinner = true;
    this.contactsService.getContacts({
      qry: val || '',
      isFilter: true
    });
  };

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      filter: ['']
    });

    this.filterForm
      .get('filter')
      .valueChanges.pipe(debounceTime(300))
      .subscribe(val => this.onFilter(val));

    this.contactsService.contacts.subscribe(() => (this.isSpinner = false));
  }
}

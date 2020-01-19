import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { ContactsService } from '@services/.';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.scss']
})
export class ContactsFilterComponent implements OnInit {
  @ViewChild('filterInput', { static: false }) filterInput: ElementRef;

  @Input() isLoading$: Observable<boolean>;

  public filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService
  ) {}

  public showIcon = isLoading =>
    isLoading
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

  public onFilter(val?) {
    this.contactsService.getContacts({
      qry: val || '',
      isFilter: true
    });
  }

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      filter: ['']
    });

    this.filterForm
      .get('filter')
      .valueChanges.pipe(debounceTime(300))
      .subscribe(val => this.onFilter(val));
  }
}

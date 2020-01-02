import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import Contact, { ContactsResponse } from '../../shared/models/contacts.types';

@Injectable()
export class ContactsService {
  private contactsSubject: BehaviorSubject<Contact[]>;
  public contacts$: Observable<Contact[]>;

  public limit = 20;
  public beforeID = 0;
  public qry = '';

  constructor(private api: ApiService) {
    this.contactsSubject = new BehaviorSubject<Contact[]>([]);
    this.contacts$ = this.contactsSubject.asObservable();
  }

  public get contactsLength() {
    return this.contactsSubject.getValue().length;
  }

  getContacts(params?): Observable<Contact[]> {
    const {
      limit = this.limit,
      beforeID = this.beforeID,
      qry = this.qry,
      getInsertBy = true,
      getPhones = true,
      keyType = 'index',
      isFilter = false
    } = params || {};

    if (isFilter) {
      this.qry = qry;
    }

    const body = {
      limit,
      beforeID,
      qry,
      getInsertBy,
      getPhones,
      keyType
    };

    this.api
      .post(environment.getContactsUrl, body)
      .subscribe((res: ContactsResponse) => {
        const newContacts = isFilter
          ? res.items
          : [...this.contactsSubject.getValue(), ...res.items];
        this.beforeID = newContacts[newContacts.length - 1].id;
        this.contactsSubject.next(newContacts);
      });

    return this.contacts$;
  }
}

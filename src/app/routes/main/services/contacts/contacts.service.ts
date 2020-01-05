import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from '@app/shared/services/api/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import Contact, { ContactsResponse } from '../../shared/models/contacts.types';

@Injectable()
export class ContactsService {
  private contactsSubject: BehaviorSubject<Contact[]>;
  private contacts$: Observable<Contact[]>;

  private limit = 20;
  private beforeID = 0;
  private qry = '';

  constructor(private api: ApiService) {
    this.contactsSubject = new BehaviorSubject<Contact[]>([]);
    this.contacts$ = this.contactsSubject.asObservable();
  }

  public get contactsLength() {
    return this.contactsSubject.getValue().length;
  }

  public get contacts() {
    return this.contacts$;
  }

  public getContacts(params?): Observable<Contact[]> {
    const {
      limit = this.limit,
      beforeID = params ? (params.isFilter ? 0 : this.beforeID) : this.beforeID,
      qry = this.qry,
      getInsertBy = true,
      getPhones = true,
      keyType = 'index',
      isFilter = false
    } = params || {};

    this.qry = qry;

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

        this.beforeID =
          newContacts.length && newContacts[newContacts.length - 1].id;

        this.contactsSubject.next(newContacts);
      });

    return this.contacts$;
  }
}

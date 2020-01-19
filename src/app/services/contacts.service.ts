import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Contact, GetContactsResponse } from '@models/.';

import { ApiService } from './api.service';
import { AppService } from './app.service';

@Injectable()
export class ContactsService {
  private contactsSubject: BehaviorSubject<Contact[]>;
  private contacts$: Observable<Contact[]>;

  private isLoadingSubject: BehaviorSubject<boolean>;
  private isLoading$: Observable<boolean>;

  private limit = 20;
  private beforeID = 0;
  private qry = '';

  constructor(private api: ApiService, private app: AppService) {
    this.contactsSubject = new BehaviorSubject<Contact[]>([]);
    this.contacts$ = this.contactsSubject.asObservable();

    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  public get contactsLength() {
    return this.contactsSubject.getValue().length;
  }

  public get contacts() {
    return this.contacts$;
  }

  public get isLoading() {
    return this.isLoading$;
  }

  public getLastContact() {
    this.isLoadingSubject.next(true);
    this.api
      .post(environment.getContactsUrl, {
        limit: 1,
        keyType: 'index'
      })
      .subscribe((res: GetContactsResponse) => {
        this.contactsSubject.next([
          ...res.items,
          ...this.contactsSubject.getValue()
        ]);
        this.isLoadingSubject.next(false);
      });
  }

  public getContacts(params?): Observable<Contact[]> {
    this.isLoadingSubject.next(true);

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
      .subscribe((res: GetContactsResponse) => {
        const newContacts = isFilter
          ? res.items
          : [...this.contactsSubject.getValue(), ...res.items];

        this.beforeID =
          newContacts.length && newContacts[newContacts.length - 1].id;

        this.contactsSubject.next(newContacts);
        this.isLoadingSubject.next(false);
      });

    return this.contacts$;
  }

  public createContact = (body: Contact) =>
    this.api.post(environment.createContactUrl, body);

  public getPhoneCodes = body =>
    this.api.post(environment.getCounriesUrl, { ...body, keyType: 'index' });
}

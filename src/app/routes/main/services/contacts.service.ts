import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContactsService {

  constructor(private httpClient: HttpClient) {}

  public getContacts({ limit, beforeID = 0, qry='' }) {
    return this.httpClient.post(environment.apiUrl, { limit, beforeID, qry, getInsertBy: true, getPhones: true });
  }
}

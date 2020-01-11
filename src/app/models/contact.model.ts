import { Notification } from './notification.model';

export interface GetContactsResponse {
  ok: boolean;
  incomplete_results: boolean;
  total_count: number;
  items: Array<Contact>;
  dbg: null;
}

export interface CreateContactResponse {
  ok: boolean;
  items: Array<Contact>;
  msg: Array<Notification>;
  dbg: null;
}
export interface Contact {
  id: number;
  POB: number;
  state: number;
  userID: number;
  userState: number;
  insertByID: number;
  msAccountID: number;
  uniqueCode: string;
  nationalID: string;
  firstName: string;
  lastName: string;
  hebName: string;
  gender: string;
  email: string;
  name: string;
  lang: string;
  age: string;
  userRoles: any[];
  phones: Phone[];
  address: Address;
  bankAccount: BankAccount;
  dob: Dob;
  timestamp: Timestamp;
  insertBy: Contact;
  roles: { [key: string]: Role };
}
export interface BankAccount {
  bankID: number;
  branchID: number;
  bankAccountNumber: string;
}

export interface Role {
  roleSubID: number;
  type: string;
  state: number;
}

export interface Address {
  countryID: number;
  countryName: string;
  cityID: number;
  cityName: string;
  street: string;
}

export interface Phone {
  prefix: string;
  phone: string;
  platforms: Array<string>;
}

export interface Dob {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface Timestamp {
  date: string;
  timezone_type: number;
  timezone: string;
}

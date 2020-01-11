import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ContactsService,
  ModalsService,
  NotificationsService
} from '@services/.';
import { CreateContactResponse } from '@models/.';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  public createContactForm: FormGroup;
  public phoneCodes = [];
  public filteredPhoneCodes = [];
  public platforms = ['telegram', 'viber', 'whatsapp'];

  public isCreateLoading = false;
  public isPhonesLoading = false;

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private modalsService: ModalsService,
    private notificationsService: NotificationsService
  ) {}

  public getPhoneCodes(qry) {
    this.isPhonesLoading = true;
    this.contactsService.getPhoneCodes({ qry }).subscribe(res => {
      this.isPhonesLoading = false;
      this.phoneCodes = res.items.map(x => `+${x.phonePrefix}`);
    });
  }

  public filterPhoneCodes(str) {
    const newStr = str.includes('+') ? str : `+${str}`;
    this.filteredPhoneCodes = this.phoneCodes
      .filter(x => x.includes(newStr))
      .slice(0, 7);
  }

  public onSubmit() {
    if (this.createContactForm.valid) {
      const createFormValue = { ...this.createContactForm.value };

      for (const prop in createFormValue) {
        if (!createFormValue[prop]) {
          delete createFormValue[prop];
        }
      }
      this.isCreateLoading = true;
      this.contactsService
        .createContact(createFormValue)
        .subscribe((res: CreateContactResponse) => {
          this.isCreateLoading = false;
          res.msg.map(msg => this.notificationsService.pushNotification(msg));
          this.closeModal();
        });
    } else {
      Object.keys(this.createContactForm.controls).forEach(field => {
        const control = this.createContactForm.get(field);
        control.markAsDirty({ onlySelf: true });
      });
    }
  }

  public closeModal = () => this.modalsService.closeModal('createContact');

  ngOnInit() {
    this.createContactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      hebName: [''],
      phones: this.fb.array([
        this.fb.group({
          prefix: [''],
          phone: [''],
          platforms: this.fb.array([''])
        })
      ]),
      email: ['', [Validators.required, Validators.email]]
    });

    this.getPhoneCodes('');
  }
}

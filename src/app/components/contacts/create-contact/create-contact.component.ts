import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ModalsService,
  NotificationsService,
  ContactsService
} from '@services/.';
import { englishPattern, arabicPattern, emailPattern } from '@utils/.';
import { CreateContactResponse } from '@models/.';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  public createContactForm: FormGroup;

  public phoneCodes = [];
  public socialMedias = ['telegram', 'viber', 'whatsapp'];

  public isCreateLoading = false;
  public isPhonesLoading = false;

  constructor(
    private fb: FormBuilder,
    private modalsService: ModalsService,
    private contactsService: ContactsService,
    private notificationsService: NotificationsService
  ) {}

  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  public getTranslateKey = key => `contacts.create.${key}`;

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
          this.contactsService.getLastContact();
        });
    } else {
      this.markFormGroupTouched(this.createContactForm);
    }
  }

  public getPhoneCodes(qry) {
    this.isPhonesLoading = true;
    this.contactsService.getPhoneCodes({ qry }).subscribe(res => {
      this.isPhonesLoading = false;
      this.phoneCodes = res.items.map(x => `+${x.phonePrefix}`);
    });
  }

  public closeModal() {
    this.createContactForm.reset();
    this.modalsService.closeModal('createContact');
  }

  public isControlValid = ctrl => this.createContactForm.get(ctrl).valid;
  public isControlTouched = ctrl => this.createContactForm.get(ctrl).touched;

  ngOnInit() {
    this.createContactForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(englishPattern)]
      ],
      lastName: ['', [Validators.required, Validators.pattern(englishPattern)]],
      hebName: ['', [Validators.pattern(arabicPattern)]],
      phones: this.fb.array(['']),
      email: ['', [Validators.required, Validators.pattern(emailPattern)]]
    });

    this.getPhoneCodes('');
  }
}

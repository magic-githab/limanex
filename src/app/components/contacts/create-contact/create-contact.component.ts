import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  public createContactForm: FormGroup;
  public codes = ['+095', '+073', '+065'];
  public messangers = [
    { title: 'Telegram', icon: 'telegram' },
    { title: 'Viber', icon: 'viber' },
    { title: 'Whats App', icon: 'whatsapp' }
  ];

  constructor(private formBuilder: FormBuilder) {}

  public onSubmit() {
    if (this.createContactForm.valid) {
      console.log('form submitted');
    } else {
      Object.keys(this.createContactForm.controls).forEach(field => {
        const control = this.createContactForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  ngOnInit() {
    this.createContactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      fullName: [''],
      phoneCode: [this.codes[0]],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      messenger: ['']
    });
  }
}

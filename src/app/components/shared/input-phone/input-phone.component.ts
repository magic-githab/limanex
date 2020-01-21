import { Component, OnInit, forwardRef, Input, ViewChild } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable, merge } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  filter,
  map
} from 'rxjs/operators';
import { phonePattern, prefixPattern } from '@utils/validators';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhoneComponent),
      multi: true
    }
  ]
})
export class InputPhoneComponent implements OnInit, ControlValueAccessor {
  @ViewChild('instance', { static: true }) instance: NgbTypeahead;

  @Input() type = 'text';
  @Input() for = 'input';
  @Input() class = '';

  @Input() label = '';
  @Input() labelTranslate = '';

  @Input() labelClass = '';
  @Input() isLabel = true;

  @Input() value = '';

  @Input() isDirty: boolean;

  @Input() phoneCodes = [];
  @Input() socialMedias = [];

  public form: FormGroup;

  public focus$ = new Subject<string>();
  public click$ = new Subject<string>();

  constructor(private fb: FormBuilder) {}

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === ''
          ? this.phoneCodes
          : this.phoneCodes.filter(
              v => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 6)
      )
    );
  };

  public onTouched: () => void = () => {};

  public writeValue(value: any): void {
    value ? this.form.patchValue(value) : this.form.reset();
  }

  public registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(value => {
      const platforms = this.form.value.platforms
        .map((v, i) => (v ? this.socialMedias[i] : null))
        .filter(v => v !== null);
      fn({ ...value, platforms });
    });
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {}

  public getInputClass = ctrl =>
    this.isDirty ? (this.form.get(ctrl).valid ? 'is-valid' : 'is-invalid') : '';

  public getLabelClass = () =>
    this.isDirty
      ? this.form.get('phone').valid && this.form.get('prefix').valid
        ? 'text-success'
        : 'text-danger'
      : '';

  public validateInput(e) {
    if (phonePattern.test(e.key)) {
      return true;
    } else {
      e.preventDefault();
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      prefix: ['', [Validators.pattern(prefixPattern)]],
      phone: ['', [Validators.pattern(phonePattern)]],
      platforms: this.fb.array([])
    });

    this.socialMedias.forEach((o, i) => {
      const control = new FormControl();
      (this.form.controls.platforms as FormArray).push(control);
    });
  }
}

import { Component, OnInit, forwardRef, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type = 'text';
  @Input() for = 'input';
  @Input() class = '';

  @Input() label = '';
  @Input() labelTranslate = '';

  @Input() labelClass = '';
  @Input() isLabel = true;

  @Input() placeholder = '';
  @Input() placeholderTranslate = '';

  @Input() value = '';

  @Input() isValid: boolean;
  @Input() isTouched: boolean;

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  public getInputClass = () =>
    this.isTouched ? (this.isValid ? 'is-valid' : 'is-invalid') : '';
  public getLabelClass = () =>
    this.isTouched ? (this.isValid ? 'text-success' : 'text-danger') : '';

  public onTouched = () => {};

  public writeValue(value: string): void {
    this.form.controls.input.setValue(value);
  }

  public registerOnChange(fn: any): void {
    this.form.controls.input.valueChanges.subscribe(value => {
      fn(value);
    });
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  ngOnInit() {
    this.form = this.fb.group({
      input: ['']
    });
  }
}

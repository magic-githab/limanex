import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type = 'button';
  @Input() isLoading = false;
  @Input() classes = 'default';
  @Input() disabled = false;
  @Input() translateKey = '';

  constructor() {}

  ngOnInit() {}
}

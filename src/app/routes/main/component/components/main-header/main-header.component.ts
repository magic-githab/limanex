import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Output() burgerClicked = new EventEmitter();

  constructor() {}

  onBurgerClick(): void {
    this.burgerClicked.emit();
  }

  ngOnInit() {}
}

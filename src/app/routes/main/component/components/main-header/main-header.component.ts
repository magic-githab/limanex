import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onToogleSidebar = new EventEmitter();

  constructor() {}

  toogleSidebar(): void {
    this.onToogleSidebar.emit();
  }

  ngOnInit() {}
}

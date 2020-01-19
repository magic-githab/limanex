import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@models/.';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() show: boolean;

  public items: Array<Route> = [];

  constructor() {}

  ngOnInit() {
    this.items.push({
      name: 'contacts',
      route: './',
      icon: 'user'
    });
  }
}

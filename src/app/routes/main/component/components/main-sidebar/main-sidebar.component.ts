import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@app/routes/main/shared/models/routes.type';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  @Input() show: boolean;

  public items: Array<Route> = [];

  constructor() {}

  ngOnInit() {
    this.items.push({
      name: 'контакты',
      route: './',
      icon: 'user'
    });
  }
}

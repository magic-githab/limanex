import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from '@services/.';
@Component({
  selector: 'app-admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public appSerice: AppService) {}

  @HostListener('window:resize')
  function = () => this.appSerice.onResize();

  ngOnInit() {
    this.appSerice.onResize();
  }
}

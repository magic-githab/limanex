import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showSidebar = true;

  constructor() {}
  isShowSidebar = () =>
    (this.showSidebar = window.innerWidth > 990 ? true : false);

  @HostListener('window:resize')
  onResize = () => this.isShowSidebar();

  toogleSidebar = () => (this.showSidebar = !this.showSidebar);

  ngOnInit() {
    this.isShowSidebar();
  }
}

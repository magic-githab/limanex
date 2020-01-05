import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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

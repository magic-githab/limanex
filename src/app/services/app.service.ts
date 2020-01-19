import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private isSideBarOpenSubject: BehaviorSubject<boolean>;
  public isSideBarOpen$: Observable<boolean>;

  constructor() {
    this.isSideBarOpenSubject = new BehaviorSubject<boolean>(false);
    this.isSideBarOpen$ = this.isSideBarOpenSubject.asObservable();
  }

  public onResize = () =>
    this.isSideBarOpenSubject.next(window.innerWidth > 990);

  public toogleSidebar() {
    this.isSideBarOpenSubject.next(!this.isSideBarOpenSubject.value);
  }
}

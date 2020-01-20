import {
  Component,
  OnInit,
  Input,
  ViewChild,
  HostListener
} from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '@models/.';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  @ViewChild('ngxTable', { static: false }) table: any;

  @Input() contacts$: Observable<Array<Contact>>;
  @Input() isLoading$: Observable<boolean>;

  public rows = [];

  private expandedRow;
  public showAddress: boolean;

  constructor() {}

  public onActivate({ type, row }) {
    if (type === 'click') {
      if (this.expandedRow !== row) {
        this.table.rowDetail.collapseAllRows();
        this.expandedRow = row;
      }
      this.table.rowDetail.toggleExpandRow(row);
    }
  }

  @HostListener('window:resize')
  onResize = () => (this.showAddress = window.innerWidth > 991.98);

  ngOnInit() {
    this.onResize();
  }
}

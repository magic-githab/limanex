import { Component, OnInit } from '@angular/core';
import { IconsService } from '@app/shared/services/icons/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(iconsService: IconsService) {}

  ngOnInit() {}
}

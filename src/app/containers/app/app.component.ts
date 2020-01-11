import { Component, OnInit } from '@angular/core';
import { IconsService, LanguagesService } from '@services/.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Have to make dependency for Services
  constructor(iconsService: IconsService, languagesService: LanguagesService) {}

  ngOnInit() {}
}

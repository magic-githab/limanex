import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}

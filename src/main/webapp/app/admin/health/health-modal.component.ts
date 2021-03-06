import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { JhiHealthService } from './health.service';
import { DISK_SPACE, GB, MB, OBJECT } from 'app/app.constants';

@Component({
  selector: 'jhi-health-modal',
  templateUrl: './health-modal.component.html'
})
export class JhiHealthModalComponent {
  currentHealth: any;

  constructor(private healthService: JhiHealthService, public activeModal: NgbActiveModal) {}

  baseName(name) {
    return this.healthService.getBaseName(name);
  }

  subSystemName(name) {
    return this.healthService.getSubSystemName(name);
  }

  readableValue(value: number) {
    if (this.currentHealth.name === DISK_SPACE) {
      // Should display storage space in an human readable unit
      const val = value / 1073741824;
      if (val > 1) {
        // Value
        return val.toFixed(2) + GB;
      } else {
        return (value / 1048576).toFixed(2) + MB;
      }
    }

    if (typeof value === OBJECT) {
      return JSON.stringify(value);
    } else {
      return value.toString();
    }
  }
}

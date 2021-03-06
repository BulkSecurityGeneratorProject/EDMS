import { Injectable } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { ITEMS_PER_PAGE } from 'app/shared';
import { SM } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class PaginationConfig {
  // tslint:disable-next-line: no-unused-variable
  constructor(private config: NgbPaginationConfig) {
    config.boundaryLinks = true;
    config.maxSize = 5;
    config.pageSize = ITEMS_PER_PAGE;
    config.size = SM;
  }
}

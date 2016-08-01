/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ItemsService } from './items.service';

describe('Service: Items', () => {
  beforeEach(() => {
    addProviders([ItemsService]);
  });

  it('should ...',
    inject([ItemsService],
      (service: ItemsService) => {
        expect(service).toBeTruthy();
      }));
});

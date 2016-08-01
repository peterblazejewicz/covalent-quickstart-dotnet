/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service';

describe('Service: Users', () => {
  beforeEach(() => {
    addProviders([UsersService]);
  });

  it('should ...',
    inject([UsersService],
      (service: UsersService) => {
        expect(service).toBeTruthy();
      }));
});

/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, beforeEachProviders, async, inject, describe, expect, it } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ItemsService } from '../shared';
import { UsersService } from '../users';
import { } from './';

describe('Component: Dashboard', () => {
  beforeEachProviders(() => [ItemsService, UsersService]);
  it('should create an instance', inject([ItemsService, UsersService], (itemsService, usersService) => {
    let component = new DashboardComponent(itemsService, usersService);
    expect(component).toBeTruthy();
  }));
});

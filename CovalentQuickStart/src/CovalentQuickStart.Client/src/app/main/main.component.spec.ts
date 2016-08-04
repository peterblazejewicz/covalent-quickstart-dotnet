/* tslint:disable:no-unused-variable */
import { Router } from '@angular/router';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject, describe, it, expect, beforeEachProviders } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('Component: Main', () => {

  beforeEachProviders(() => [Router]);
  it('should create an instance', inject([Router], (router: Router) => {
    let component = new MainComponent(router);
    expect(component).toBeTruthy();
  }));
});

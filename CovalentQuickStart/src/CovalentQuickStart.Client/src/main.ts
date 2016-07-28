import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { MdIconRegistry } from '@angular2-material/icon';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { TD_MEDIA_PROVIDERS } from '@covalent/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  MdIconRegistry,
  HTTP_PROVIDERS,
  TD_MEDIA_PROVIDERS,
]);

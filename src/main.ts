import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// required for JIT
declare const require;
export function translationsFactory() {
  let locale = (window.clientInformation && window.clientInformation.language) || window.navigator.language;
  let language = locale.split('-')[0];

  return require(`raw-loader!./i18n/messages.${language}.xlf`);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [
      { provide: TRANSLATIONS, useFactory: translationsFactory, deps: [] },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
    ]
  })
  .catch(err => console.error(err));

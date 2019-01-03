import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// required for JIT
declare const require;
const translations = require(`raw-loader!./i18n/messages.en.xlf`);

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    providers: [{ provide: TRANSLATIONS, useValue: translations }, { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }]
  })
  .catch(err => console.error(err));

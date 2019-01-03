import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { I18nLoader } from './i18n/i18nLoader';

import { I18n, MISSING_TRANSLATION_STRATEGY } from '@ngx-translate/i18n-polyfill';

// required for accessing i18n message in code, i18n polyfill
declare const require;
export function translationsFactory(locale: string) {
  locale = locale == 'en-US' || !locale ? 'en' : locale;
  return require(`raw-loader!../i18n/messages.${locale}.xlf`);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: I18nLoader
      }
    })
  ],
  providers: [
    I18n,
    { provide: TRANSLATIONS, useFactory: translationsFactory, deps: [LOCALE_ID] },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    { provide: MISSING_TRANSLATION_STRATEGY, useValue: MissingTranslationStrategy.Warning }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

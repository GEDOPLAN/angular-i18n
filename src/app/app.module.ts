import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { I18nLoader } from './i18n/i18nLoader';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18n } from '@ngx-translate/i18n-polyfill';

@Component({
  selector: 'GED-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locale: string = 'init';

  constructor(private translateService: TranslateService, private i18n: I18n) {
    this.locale = translateService.getBrowserLang();
    translateService.use(this.locale);
    translateService.get('TITLE').subscribe(t => console.log('ngx: ' + t));

    console.log(i18n({ id: 'title', value: '(welcome)' }));
  }
}

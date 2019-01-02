import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'GED-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locale: string = 'init';

  constructor(private translateService: TranslateService) {
    this.locale = translateService.getBrowserLang();
    translateService.use(this.locale);
    translateService.get('TITLE').subscribe(t => console.log(t));
  }
}

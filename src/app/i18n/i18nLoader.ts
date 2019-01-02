import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { de } from './de';
import { en } from './en';

export class I18nLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang === 'de') {
      return of(de);
    } else {
      return of(en);
    }
  }
}

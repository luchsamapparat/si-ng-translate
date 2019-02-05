import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';

const translateLoader: TranslateLoader = {
  getTranslation(lang) {
    return of({
      formFields: {
        foo: {
          label: 'Foo',
          placeholder: 'Enter something...'
        },
        bar: {
          label: 'Bar'
        }
      }
    });
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useValue: translateLoader
      },
      isolate: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }
}

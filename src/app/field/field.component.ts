import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pdc-field',
  templateUrl: './field.component.html',
})
export class FieldComponent {

  @Input()
  fieldName: string;

  constructor(
    private translateService: TranslateService
  ) {}

  get labelTranslationKey() {
    return `formFields.${this.fieldName}.label`;
  }

  get placeholder() {
    const translationKey =`formFields.${this.fieldName}.placeholder`;
    const placeholder = this.translateService.instant(translationKey);

    return (placeholder === translationKey) ? '' : placeholder;
  }

}

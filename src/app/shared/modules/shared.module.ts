import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzIconModule, NZ_ICONS} from 'ng-zorro-antd/icon';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NZ_I18N, ru_RU} from 'ng-zorro-antd/i18n';

import {DatePipe, registerLocaleData} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StatusPipe} from '../pipes/status.pipe';
import {LogsStatusPipe} from '../pipes/logsStatus.pipe';
import {CurrencyPipe} from '../pipes/currency.pipe';
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {IconsProviderModule} from '../../icons-provider.module';
// import * as AllIcons from '@ant-design/icons-angular';
import {IconDefinition} from '@ant-design/icons-angular';
import ru from '@angular/common/locales/ru';
import {NgxBarcodeModule} from 'ngx-barcode';
import {NgxMaskModule} from 'ngx-mask';
import {NgxPrinterModule} from 'ngx-printer';
import { UserOutline, LockOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ UserOutline, LockOutline ];
// const antDesignIcons = AllIcons as unknown as {
//   [key: string]: IconDefinition;
// };

// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
//   const i = antDesignIcons[key];
//   return i;
// });

registerLocaleData(ru);
@NgModule({
  declarations: [
    StatusPipe,
    LogsStatusPipe,
    CurrencyPipe,
  ],
  imports: [
    HttpClientModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzEmptyModule,
    NzModalModule,
    NzFormModule,
    NzAlertModule,
    NzPaginationModule,
    NzTableModule,
    NzSelectModule,
    NzInputNumberModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzAutocompleteModule,
    NzBadgeModule,
    NzStatisticModule,
    NzSpinModule,
    NzTabsModule,
    NzPopconfirmModule,
    NzTypographyModule,
    NzDividerModule,
    FormsModule,
    DatepickerModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzIconModule,
    NgxBarcodeModule,
    NgxMaskModule.forRoot(),
    NgxPrinterModule.forRoot({printOpenWindow: true}),
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzEmptyModule,
    NzModalModule,
    NzFormModule,
    NzAlertModule,
    NzPaginationModule,
    NzTableModule,
    NzSelectModule,
    NzInputNumberModule,
    NzDropDownModule,
    NzDatePickerModule,
    NzAutocompleteModule,
    NzBadgeModule,
    NzStatisticModule,
    NzSpinModule,
    NzTabsModule,
    NzPopconfirmModule,
    NzTypographyModule,
    NzDividerModule,
    DatepickerModule,
    ReactiveFormsModule,
    NzIconModule,
    StatusPipe,
    LogsStatusPipe,
    CurrencyPipe,
    NgxBarcodeModule,
    NgxMaskModule,
    NgxPrinterModule
  ],
  providers: [{
    provide: NZ_I18N,
    useValue: ru_RU
  },
    {
      provide: NZ_ICONS,
      useValue: icons
    },
    DatePipe]
})
export class SharedModule {

}

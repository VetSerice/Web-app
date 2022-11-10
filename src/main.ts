import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFac1lJXGFWd0x0RWFbb1Z6dFBMYF9BJAtUQF1hS39SdkxhWX5adXRWTmBV');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

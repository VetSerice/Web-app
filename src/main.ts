import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFacldJXGJWd0x0RWFbb19xfldEal5YVAciSV9jS3xSdkdlWHhbcXRXQWlYUA==');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

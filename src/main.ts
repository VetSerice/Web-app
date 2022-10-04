import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJXGNWf1NpR2NbfU51flZBal5UVBYiSV9jS3xTf0RjWHhbcnVcT2ldVA==\n');

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

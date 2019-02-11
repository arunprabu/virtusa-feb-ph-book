import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Step2: ng App should be bootstrapped /kickstarted  with a module 'AppModule'.
platformBrowserDynamic().bootstrapModule(AppModule)  
  .catch(err => console.log(err));

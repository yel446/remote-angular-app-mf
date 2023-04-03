import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Component1Component } from './component1/component1.component';
import { FormsModule } from '@angular/forms';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [AppComponent, Component1Component, Component2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent, Component1Component, Component2Component],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const remoteAngularApp = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    const component1 = createCustomElement(Component1Component, {
      injector: this.injector,
    });
    const component2 = createCustomElement(Component2Component, {
      injector: this.injector,
    });
    customElements.define('app-micro-fe', remoteAngularApp);
    customElements.define('app-component1-mf', component1);
    customElements.define('app-component2-mf', component2);
  }
}

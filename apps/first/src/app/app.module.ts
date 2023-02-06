import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsComponent } from '@nx-app04/layouts';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, LayoutsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorChangeDirective } from './app.directive';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ColorChangeDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

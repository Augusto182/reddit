import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { OrdenarPipe } from './ordenar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    OrdenarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApigitService } from './apigit.service';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    ApigitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteComponent } from './quote/quote.component';
import { VoteComponent } from './vote/vote.component';
import { DateCPipe } from './date-c.pipe';
import { MomentModule} from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    QuoteDetailsComponent,
    QuoteComponent,
    VoteComponent,
    DateCPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MomentModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

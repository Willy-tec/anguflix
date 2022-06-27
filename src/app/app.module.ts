import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListComponent } from './list/list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MinicardComponent } from './minicard/minicard.component';
import localeFr from '@angular/common/locales/fr';
import { RatingComponent } from './rating/rating.component';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ChipsComponent,
    DetailViewComponent,
    SideBarComponent,
    ListComponent,
    PaginationComponent,
    MinicardComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

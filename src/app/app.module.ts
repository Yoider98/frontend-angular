import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { ButtonComponent } from './shared/button/button.component';
import { BookListComponent } from './features/book-list/book-list.component';
import { BookFiltersComponent } from './features/book-filters/book-filters.component';
import { BookDetailComponent } from './features/book-detail/book-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BookDetailModalComponent} from './features/book-detail-modal/book-detail-modal.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    ButtonComponent,
    BookListComponent,
    BookFiltersComponent,
    BookDetailComponent,
    HomeComponent,
    BookDetailModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

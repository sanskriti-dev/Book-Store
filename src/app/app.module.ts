import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from '../service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    OverlayModule,
    RouterModule.forRoot([
        {path: '', component: BookListComponent}
  ])],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

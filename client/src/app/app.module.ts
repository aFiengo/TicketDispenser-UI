import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/body/eventShows/eventShow-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/body/gallery/gallery.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { EventShowService } from './components/body/eventShows/eventShow.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    FooterComponent,
    HeaderComponent,
    GalleryComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

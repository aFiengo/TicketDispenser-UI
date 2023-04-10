import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { EventListComponent } from './components/body/eventShows/eventShow-list.component';
import { GalleryComponent } from './components/body/gallery/gallery.component';

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: GalleryComponent},
  { path: 'events', component: EventListComponent },
  { path: 'events/:eventId', component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



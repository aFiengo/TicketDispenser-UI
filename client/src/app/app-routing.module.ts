import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { EventListComponent } from './components/body/eventShows/eventShow-list.component';

const routes : Routes = [
  { path: 'event-show-list', component: EventListComponent },
  { path: 'purchase/:eventId', component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



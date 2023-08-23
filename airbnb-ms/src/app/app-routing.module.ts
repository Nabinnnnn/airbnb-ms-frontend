import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import { DetailComponent } from './detail/detail.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [{path:'', component:PropertyListComponent},
{path:'new',component:NewPropertyComponent},
{path:'update/:id', component:NewPropertyComponent},
{path:'detail/:id', component:DetailComponent},
{path:'booking/:id',component:BookingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

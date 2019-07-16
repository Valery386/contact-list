import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/features/components/contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/features/components/contact-item/contact-item.component';

const routes: Routes = [
  { path: 'contact/:id', component: ContactItemComponent },
  { path: '', component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

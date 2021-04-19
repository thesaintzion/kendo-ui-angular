import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGidePageComponent } from './componets/ag-gide-page/ag-gide-page.component';
import { ButtonsPageComponent } from './componets/buttons-page/buttons-page.component';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '404', component: PageNotFoundComponent},
  { path: 'buttons', component: ButtonsPageComponent },
  { path: 'ag-gride', component: AgGidePageComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

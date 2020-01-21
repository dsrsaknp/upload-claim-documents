import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {path: 'claims-status', component: ClaimsComponent},
  {path: 'uploaded-documents', component: ReportsComponent},
  {path: '', redirectTo: '/claims-status', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

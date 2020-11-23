import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrickInfoComponent } from './crick-info/crick-info.component';
import { LiveUpdateComponent } from './crick-info/live-update/live-update.component';
import { ResultComponent } from './crick-info/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: CrickInfoComponent,
    children: [
      {
        path: 'live-update',
        component: LiveUpdateComponent
      },
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

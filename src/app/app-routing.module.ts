import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'base', component: BaseComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '',   redirectTo: '/base', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

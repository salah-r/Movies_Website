import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import path from 'path';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

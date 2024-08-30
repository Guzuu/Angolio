import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RedoComponent } from './pages/redo/redo.component';
import { PrivacyPolicyComponent } from './pages/redo/privacy-policy/privacy-policy.component';
import { AccountDeletionComponent } from './pages/redo/account-deletion/account-deletion.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'redo', component: RedoComponent},
    {path: 'redo/privacy-policy', component: PrivacyPolicyComponent},
    {path: 'redo/account-deletion', component: AccountDeletionComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
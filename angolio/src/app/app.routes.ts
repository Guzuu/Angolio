import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RedoComponent } from './pages/redo/redo.component';
import { PrivacyPolicyComponent } from './pages/redo/privacy-policy/privacy-policy.component';
import { AccountDeletionComponent } from './pages/redo/account-deletion/account-deletion.component';
import { FamilyTreeComponent } from './pages/family-tree/family-tree.component';
import { NgModule } from '@angular/core';
import { AddMemberComponent } from './pages/family-tree/add-member/add-member.component';
import { EditMemberComponent } from './pages/family-tree/edit-member/edit-member.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'redo', component: RedoComponent },
  { path: 'redo/privacy-policy', component: PrivacyPolicyComponent },
  { path: 'redo/account-deletion', component: AccountDeletionComponent },
  {
    path: 'family-tree',
    component: FamilyTreeComponent,
  },
  
  { path: 'family-tree/add-member', component: AddMemberComponent },
  { path: 'family-tree/edit-member/:id', component: EditMemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { WhenafkComponent } from './pages/whenafk/whenafk.component';
import { RedoComponent } from './pages/redo/redo.component';
import { PrivacyPolicyComponent } from './pages/redo/privacy-policy/privacy-policy.component';
import { AccountDeletionComponent } from './pages/redo/account-deletion/account-deletion.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'technologies', component: TechnologiesComponent},
    {path: 'when-afk', component: WhenafkComponent},
    {path: 'redo', component: RedoComponent},
    {path: 'redo/privacy-policy', component: PrivacyPolicyComponent},
    {path: 'redo/account-deletion', component: AccountDeletionComponent},
];

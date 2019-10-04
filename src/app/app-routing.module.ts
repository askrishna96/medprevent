import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'organisatie', loadChildren: './organisatie/organisatie.module#OrganisatiePageModule' },
  { path: 'evaluation', loadChildren: './evaluation/evaluation.module#EvaluationPageModule' },
  { path: 'advice', loadChildren: './advice/advice.module#AdvicePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

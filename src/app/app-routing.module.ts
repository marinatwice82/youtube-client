import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from './core/guards/main.guard';
import { Page404Component } from './core/pages/page404.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule), canActivate: [MainGuard]
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: Page404Component, canActivate: [MainGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

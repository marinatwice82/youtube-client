import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from '../core/guards/main.guard';
import { DetailedComponent } from './pages/detailed/detailed.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'item/:id',
    component: DetailedComponent, canActivate: [MainGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class YoutubeRoutingModule { }

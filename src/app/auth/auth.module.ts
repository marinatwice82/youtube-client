import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, SharedModule, FormsModule],
  providers: []
})

export class AuthModule { }

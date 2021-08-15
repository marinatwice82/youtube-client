import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, MaterialModule, FormsModule],
  providers: []
})
export class AuthModule { }

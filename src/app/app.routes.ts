import {Routes} from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import {AuthGuard} from "./guards/auth.guard";
import {BaseComponent} from "./components/base/base.component";

export const routes: Routes = [
  { path: '', component: BaseComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '' },
];

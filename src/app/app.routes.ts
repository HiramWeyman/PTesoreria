
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../app/shared/inicio/inicio.component';

const APP_ROUTES: Routes = [
  { path: '', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

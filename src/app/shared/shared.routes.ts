
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TeamComponent } from './team/team.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';



const sharedRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'team', component: TeamComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: '' }
];

//export const SHARED_ROUTES = RouterModule.forChild(sharedRoutes);
export const SHARED_ROUTES = RouterModule.forRoot(sharedRoutes, {useHash: false});

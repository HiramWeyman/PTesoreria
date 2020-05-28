import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SHARED_ROUTES } from './shared.routes';

import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SkillComponent } from './skill/skill.component';
import { MissionComponent } from './mission/mission.component';
import { PromoComponent } from './promo/promo.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CtaComponent } from './cta/cta.component';
import { BlogComponent } from './blog/blog.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PreciosComponent } from './precios/precios.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';

//material
import { MatToolbarModule } from '@angular/material/toolbar/';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    SlideComponent,
    ServiceComponent,
    AboutUsComponent,
    SkillComponent,
    MissionComponent,
    PromoComponent,
    TestimonialComponent,
    CtaComponent,
    BlogComponent,
    ClientComponent,
    FooterComponent,
    TeamComponent,
    ServiciosComponent,
    PreciosComponent,
    NoticiasComponent,
    ContactanosComponent,
    LoginComponent,
    SidebarComponent,
    PieComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    SHARED_ROUTES,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports:[
    EncabezadoComponent,
    PieComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [InicioComponent]
})

export class SharedModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AvisoDePrivacidadComponent } from './shared/aviso-de-privacidad/aviso-de-privacidad.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'servicios',
    loadChildren: () => import( './pages/servicios/servicios.module' ).then( m => m.ServiciosModule )
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'aviso-de-privacidad',
    component: AvisoDePrivacidadComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

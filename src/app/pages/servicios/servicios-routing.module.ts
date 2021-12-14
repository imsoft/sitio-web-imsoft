import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionesMovilesComponent } from './aplicaciones-moviles/aplicaciones-moviles.component';
import { AplicacionesWebComponent } from './aplicaciones-web/aplicaciones-web.component';
import { DesarrolloDeSoftwareComponent } from './desarrollo-de-software/desarrollo-de-software.component';
import { OfertaServiciosComponent } from './oferta-servicios/oferta-servicios.component';
import { SeoComponent } from './seo/seo.component';
import { SitiosWebComponent } from './sitios-web/sitios-web.component';
import { TiendaEnLineaComponent } from './tienda-en-linea/tienda-en-linea.component';
import { ErrorPageComponent } from '../../shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'oferta-de-servicios',
        component: OfertaServiciosComponent
      },
      {
        path: 'desarrollo-de-software',
        component: DesarrolloDeSoftwareComponent
      },
      {
        path: 'sitios-web',
        component: SitiosWebComponent
      },
      {
        path: 'aplicaciones-web',
        component: AplicacionesWebComponent
      },
      {
        path: 'aplicaciones-moviles',
        component: AplicacionesMovilesComponent
      },
      {
        path: 'tienda-en-linea',
        component: TiendaEnLineaComponent
      },
      {
        path: 'seo',
        component: SeoComponent
      },
      {
        path: '**',
        component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }

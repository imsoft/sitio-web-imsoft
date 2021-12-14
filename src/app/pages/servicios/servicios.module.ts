import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { DesarrolloDeSoftwareComponent } from './desarrollo-de-software/desarrollo-de-software.component';
import { SeoComponent } from './seo/seo.component';
import { TiendaEnLineaComponent } from './tienda-en-linea/tienda-en-linea.component';
import { AplicacionesMovilesComponent } from './aplicaciones-moviles/aplicaciones-moviles.component';
import { AplicacionesWebComponent } from './aplicaciones-web/aplicaciones-web.component';
import { SitiosWebComponent } from './sitios-web/sitios-web.component';
import { OfertaServiciosComponent } from './oferta-servicios/oferta-servicios.component';


@NgModule({
  declarations: [
    DesarrolloDeSoftwareComponent,
    SeoComponent,
    TiendaEnLineaComponent,
    AplicacionesMovilesComponent,
    AplicacionesWebComponent,
    SitiosWebComponent,
    OfertaServiciosComponent
  ],
  exports:[
    DesarrolloDeSoftwareComponent,
    SeoComponent,
    TiendaEnLineaComponent,
    AplicacionesMovilesComponent,
    AplicacionesWebComponent,
    SitiosWebComponent,
    OfertaServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }

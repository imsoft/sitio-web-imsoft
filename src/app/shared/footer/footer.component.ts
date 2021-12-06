import { Component, OnInit } from '@angular/core';
import { informacionContacto, menu, redesSociales } from '../../interfaces/information.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  seccionesMenu: menu[] = [
    {
      nombre: 'Inicio',
      ruta  : '/'
    },
    {
      nombre: 'Nosotros',
      ruta  : '/nosotros'
    }
    ,
    {
      nombre: 'Servicios',
      ruta  : '/servicios'
    }
    ,
    {
      nombre: 'Portafolio',
      ruta  : '/portafolio'
    }
    ,
    {
      nombre: 'Contacto',
      ruta  : '/contacto'
    }
  ];

  datosContacto: informacionContacto[] = [
    {
      enlace: 'tel:3325365558',
      dato  : '33 2536 5558',
      icono : 'bi bi-telephone' 
    },
    {
      enlace: 'mailto:contacto@imsoft.com.mx',
      dato  : 'contacto@imsoft.com.mx',
      icono : 'bi bi-envelope'
    }
  ];

  socialMedia: redesSociales[] = [
    {
      enlace: 'https://www.facebook.com/weareimsoft',
      icono : 'bi bi-facebook' 
    },
    {
      enlace: 'https://www.instagram.com/weareimsoft/?hl=es-la',
      icono : 'bi bi-instagram'
    },
    {
      enlace: 'https://www.linkedin.com/in/brandon-uriel-garc%C3%ADa-ramos-a3a236219/',
      icono : 'bi bi-linkedin' 
    },
    {
      enlace: 'https://twitter.com/weareimsoft',
      icono : 'bi bi-twitter' 
    },
    {
      enlace: 'https://www.tiktok.com/@weareimsoft',
      icono : 'bi bi-tiktok' 
    },
    {
      enlace: 'https://wa.me/+5213325365558?text=Vengo%20de%20su%20sitio%20web,%20me%20interesa%20conocer%20más%20sobre%20imSoft.',
      icono : 'bi bi-whatsapp'
    },
    {
      enlace: 'https://github.com/imsoft',
      icono : 'bi bi-github' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

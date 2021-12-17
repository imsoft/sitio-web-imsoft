import { Component, HostListener, OnInit } from '@angular/core';
import { menu } from 'src/app/interfaces/information.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  clickedToggleButton = false;
  private wasInside = false;

  public innerWidth!: number;

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
      ruta  : '/servicios/oferta-de-servicios'
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

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  
  @HostListener('document:click')
  clickout() {
    if ( !this.wasInside && this.clickedToggleButton ) {
      document.getElementById('button-menubar')?.click();
    }
    this.wasInside = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  cambiarEstado() {
    this.clickedToggleButton = !this.clickedToggleButton;
  }

  cerrarMenu() {
    if( this.innerWidth <= 992 ) {
      document.getElementById('button-menubar')?.click();
    }
  }
}
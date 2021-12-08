import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irDesarrolloDeSoftware() {
    //window.location.replace('/servicios#desarrolloDeSoftware');
    window.location.href = '/servicios#desarrolloDeSoftware'; 
  }

  irSitioWeb() {
    //window.location.replace('/servicios#sitioWeb');
    window.location.replace('/servicios#sitioWeb');
  }

  irAplicacionesWeb() {
    //window.location.replace('/servicios#aplicacionesWeb');
    window.location.href = '/servicios#aplicacionesWeb';
  }

  irAplicacionesMoviles() {
    //window.location.replace('/servicios#aplicacionesMoviles');
    window.location.href = '/servicios#aplicacionesMoviles';
  }

  irTiendaEnLinea() {
    //window.location.replace('/servicios#tiendaEnLinea');
    window.location.href = '/servicios#tiendaEnLinea';
  }

  irSeo() {
    //window.location.replace('/servicios#seo');
    window.location.href = '/servicios#seo';
  }

}

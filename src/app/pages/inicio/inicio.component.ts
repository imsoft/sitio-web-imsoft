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
    window.location.replace('/servicios#desarrolloDeSoftware');
  }

  irSitioWeb() {
    window.location.replace('/servicios#sitioWeb');
  }

  irAplicacionesWeb() {
    window.location.replace('/servicios#aplicacionesWeb');
  }

  irAplicacionesMoviles() {
    window.location.replace('/servicios#aplicacionesMoviles');
  }

  irTiendaEnLinea() {
    window.location.replace('/servicios#tiendaEnLinea');
  }

  irSeo() {
    window.location.replace('/servicios#seo');
  }

}

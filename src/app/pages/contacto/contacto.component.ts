import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { informacionContacto, redesSociales } from 'src/app/interfaces/information.interface';

import Swal from 'sweetalert2';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formularioContacto: FormGroup = this.fb.group({
    nombre  : [ '', [ Validators.required ] ],
    telefono: [ '', [ Validators.required, Validators.minLength( 10 ) ] ],
    correo  : [ '', [ Validators.required, Validators.email ] ],
    mensaje : [ '', Validators.required ]
  });

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

  constructor( private fb: FormBuilder, private emailService: EmailService ) { }
  
  ngOnInit() {
    this.formularioContacto.reset({
      nombre  : '',
      telefono: '',
      correo  : '',
      mensaje : ''
    })
  }

  campoNoEsValido( campo: string ) {
    return this.formularioContacto.controls[ campo ].invalid && this.formularioContacto.controls[ campo ].touched;
  }
  
  enviar () {

    if( this.formularioContacto.invalid ) {

      this.formularioContacto.markAllAsTouched();
      return;
      
    }
    else {

      const usercontac = this.formularioContacto.value;

      this.emailService.sendContactEmail( usercontac ).subscribe(( resp: any ) => {

        if( resp.resultado ) {
          if(resp.resultado == 'OK') {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '¡Mensaje enviado correctamente!',
              text: 'Nos contactaremos a la brevedad',
              showConfirmButton: false,
              timer: 1500
            });
          }
          else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Lo sentimos',
              text: 'No se logró enviar tu mensaje, por favor intenta mas tarde...',
              showConfirmButton: false,
              timer: 1500
            });
          }
        }

      }
      ,( error ) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '¡Mensaje enviado correctamente!',
          text: 'Nos contactaremos a la brevedad',
          showConfirmButton: false,
          timer: 1500
        });
      } );
    }

    this.formularioContacto.reset();

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormContact } from '../models/formContact.model';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  sendContactEmail( formContact: FormContact ) {

    return this.http.post(this.url, formContact)
           .pipe(
            timeout(2000)
           );
           
  }

}

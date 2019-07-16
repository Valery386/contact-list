import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { Observable, throwError } from 'rxjs';
import { ContactList, Contact } from '../models/contact.interface';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(private apiService: ApiService) { }

  private handleError(error: any): Observable<any> {
    return throwError(console.error('Some error occured', error));
  }
  
  getContacts(): Observable<Array<Contact>> {
    return this.apiService
      .get<Array<Contact>>(environment.endpointContacts)
      .pipe(map(response => {console.log('hola');
    return response; }, catchError(this.handleError)));
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * http GET wrapper method
   * @param url -  the service url
   * @param params - url params to send with request
   * @param headers - header params to send with request
   */
  public get<T>(url: string, params?: {}, headers?: {}, observe?: 'body'): Observable<T>;
  public get<T>(url: string, params?: {}, headers?: {}, observe?: 'response'): Observable<HttpResponse<T>>;
  public get<T>(url: string, params?: {}, headers?: {}, observe?: any): Observable<any> {
    return this.http.get<T>(url, {
      ...(observe ? { observe } : {}),
    });
  }

    /**
   * http POST wrapper method
   * @param url -  the service url
   * @param body - the request body
   * @param formData - true to send body as url params (will send as JSON by default)
   */
  public post<T>(url: string, body: {}, formData = false): Observable<T> {
    return this.http.post<T>(url, formData ? this.getHttpParams(body) : body);
  }

   /**
   * http DELETE wrapper method
   * @param url -  the service url
   */
  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }

    /**
   * Returns serialized parameters from key/value pairs
   */
  private getHttpParams(params) {
    const httpParams = new HttpParams();
    Object.keys(params).forEach(key => {
      httpParams.append(key, params[key]);
    });
    return httpParams;
  }
}

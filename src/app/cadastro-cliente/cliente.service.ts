import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl: string = 'http://localhost:8080/clientes'; 
  constructor(private http: HttpClient) {}

  getClientes():Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  
  getById(cliente:any):Observable<any> {
    return this.http.get<any>(this.apiUrl + '/'+cliente.id );
  }
  
  create(cliente:any):Observable<any> {
    return this.http.post<any>(this.apiUrl ,cliente);
  }

  update(cliente:any):Observable<any> {
    return this.http.put<any>(this.apiUrl+ '/'+cliente.id ,cliente);
  }
  delete(cliente:any):Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/'+cliente.id);
  }
}

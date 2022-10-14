import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  apiUrl: string = 'http://localhost:8080/clientes'; 
  constructor(private http: HttpClient) {}

  getFuncionarios():Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  
  getById(funcionario:any):Observable<any> {
    return this.http.get<any>(this.apiUrl + '/'+funcionario.id );
  }
  
  create(funcionario:any):Observable<any> {
    return this.http.post<any>(this.apiUrl ,funcionario);
  }

  update(funcionario:any):Observable<any> {
    return this.http.put<any>(this.apiUrl+ '/'+funcionario.id ,funcionario);
  }
  delete(funcionario:any):Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/'+funcionario.id);
  }
}
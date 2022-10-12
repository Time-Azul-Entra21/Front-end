import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  apiUrl: string = 'http://localhost:8080/home';
 
  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get<any>(this.apiUrl + '/tasks/');
  }
 
  getMenu() {
    return this.http.get<any>(this.apiUrl + '/menu/');
  }
  getClientes() {
    return this.http.get<any>(this.apiUrl + '/clientes');
  }
  getEquipamentos() {
    return this.http.get<any>(this.apiUrl + '/equipamentos');
  }
  getFuncionarios() {
    return this.http.get<any>(this.apiUrl + '/funcionarios');
  }
}

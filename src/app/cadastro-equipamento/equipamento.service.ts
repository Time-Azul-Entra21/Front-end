import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  apiUrl: string = 'http://localhost:8080/equipamentos'; 
  constructor(private http: HttpClient) {}

  getEquipamentos():Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  
  getById(equipamento:any):Observable<any> {
    return this.http.get<any>(this.apiUrl + '/'+equipamento.id );
  }
  
  create(equipamento:any):Observable<any> {
    return this.http.post<any>(this.apiUrl ,equipamento);
  }

  update(equipamento:any):Observable<any> {
    return this.http.put<any>(this.apiUrl+ '/'+equipamento.id ,equipamento);
  }
  delete(equipamento:any):Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/'+equipamento.id);
  }
}

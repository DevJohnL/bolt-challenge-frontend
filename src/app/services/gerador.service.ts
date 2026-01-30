import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gerador } from '../models/gerador';

const API_BASE = 'http://localhost:8080/api/v1';

/**
 * Service que espelha o Controller do Backend.
 * Responsável por chamar a API.
 */
@Injectable({
  providedIn: 'root',
})
export class GeradorService {
  constructor(private http: HttpClient) {}

  getTop5(): Observable<Gerador[]> {
    return this.http.get<Gerador[]>(`${API_BASE}/geradores/top5`);
  }
}

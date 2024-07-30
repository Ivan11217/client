import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api';

  getPerfiles() {
    return axios.get(`${this.apiUrl}/perfiles`);
  }

  getUsuarios() {
    return axios.get(`${this.apiUrl}/usuarios`);
  }

  createUsuario(usuario: any) {
    return axios.post(`${this.apiUrl}/usuarios`, usuario);
  }
}

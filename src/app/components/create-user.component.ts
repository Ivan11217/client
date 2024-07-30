import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  perfiles: any[] = [];
  usuario = {
    usuario: '',
    nombre: '',
    apellido: '',
    id_perfil: null
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPerfiles().then(response => {
      this.perfiles = response.data;
    });
  }

  crearUsuario() {
    this.apiService.createUsuario(this.usuario).then(response => {
      alert('Usuario creado con éxito');
    });
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home - Examen PWA');
  }

  pedirPermiso() {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta notificaciones');
      return;
    }

    Notification.requestPermission().then((permiso) => {
      if (permiso === 'granted') {
        alert('Permiso concedido');
      } else {
        alert('Permiso denegado');
      }
    });
  }

  probarNotificacion() {
    if (Notification.permission === 'granted') {
      new Notification('Notificacion de examen', {
        body: 'Tarea 9 del segundo examen, permitir y mostrar notificaciones.',
        icon: 'assets/icons/icon-192x192.png'
      });
    } else {
      alert('Primero debes permitir notificaciones');
    }
  }
}

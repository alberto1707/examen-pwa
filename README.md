# ExamenPwa

Proyecto realizado con angular 20
Exámen Práctico Segundo Parcial - Tecnologías de Internet.

## 2 Framework CSS

El framework elegido es BOOTSTRAP, se realizó la instalacion con:

```bash
npm install bootstrap
```

Se agregó en angular.json

```bash
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## 3 Descargar Template con Bootstrap

Template: SB Admin Angular

Fuente: [https://startbootstrap.com/template/sb-admin-angular]

Licencia: MIT

## 4 Integrar template en Home

Creación del componente Home, donde se agregó:

Navbar, Sidebar y Footer.

## 5 Página de demostracion /ui

Ruta /ui, donde se agrego los componentes:

Sidebar, navbar, footer y tarjetas de colores

## 6 Ruteo y accesibilidad básica

Enrutar entre Home y UI, ajustes en sus componentes .ts

Accesibilidad en el boton de busqueda y enlace de las tarjetas de colores.

## 7 Activar PWA (Service Worker y manifest)

Habilitacion de PWA en el proyecto "examen-pwa"

```bash
ng add @angular/pwa --project examen-pwa
```

Observacion de las configuraciones pertinentes

"serviceWorker": "ngsw-config.json" (angular.json)

(index.html)
```bash
<link rel="manifest" href="manifest.webmanifest"> 
```

## 8 Offline para la pagina principal

Configuracion en ngsw-config.json

```bash
  {
    "name": "assets",
    "installMode": "prefetch",
    "updateMode": "prefetch",
    "resources": {
      "files": [
        "/**/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)",
        "/assets/**",
        "/assets/template/**"
      ]
    }
  }
```

### Prueba Offline

- Correr en produccion `ng build --configuration production`
- Instalar servicio `http-server`
- Verificación en Chrome
  - Service worker activo.
  - Manifest detectado
  - Modo offline.

## 9 Notificaciones desde la app

- Implementacion de dos botones
  - Activar Notificaciones
  - Ejecutar Notificacion

- Funcion para habilitar notificaciones
```bash
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
```

- Funcion para mandar notificacion
```bash
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
```

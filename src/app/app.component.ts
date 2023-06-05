import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/tab3', icon: 'school' },
    { title: 'Nosotros', url: '/home', icon: 'business' },
    { title: 'Bienestar', url: '/bienestar', icon: 'medkit' },
    { title: 'Restaurante', url: '/tabs', icon: 'fast-food' },
  ];
  constructor() {}
}

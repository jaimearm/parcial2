import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  constructor(public alertionic:AlertController) { }

  async presentAlert() {
    const alert = await this.alertionic.create({
      header: 'Grcias por llenar el formulario',
      subHeader: 'Reserva correcta',
      message: 'nos vemos en otra ocasion!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  selectedComida: string = '';
  selectedCena: string = '';
  selectedPrecio: string = '';
  comidas: string[] = ['Desayuno', 'Almuerzo', 'Cena'];
  food: string[] = [];
  precios: string[] = [];

  updateFood() {
    switch (this.selectedComida) {
      case 'Desayuno':
        this.food = ['Arepa rellena', 'Wafles', 'Huevo con arepa', 'Tostadas con huevo'];
        break;
      case 'Almuerzo':
        this.food = ['Pescado', 'Pollo', 'Carne','Arroz con pollo'];
        break;
      case 'Cena':
        this.food = ['Salchipapa', 'Hamburguesa','Sandwich','Patacon rrelleno'];
        break;
      default:
        this.food = [];
        break;
    }
    this.selectedCena = '';
    this.selectedPrecio = '';
  }

  updatePrice() {
    switch (this.selectedCena) {
      case 'Arepa rellena':
        this.precios = ['2000', '3000', '4000'];
        break;
      case 'Wafles':
        this.precios = ['5000', '10000'];
        break;
      case 'Huevo con arepa':
        this.precios = ['3000'];
        break;
      case 'Tostadas con huevo':
        this.precios = ['3500'];
        break;
      case 'Pescado':
        this.precios = ['7000'];
        break;
      case 'Pollo':
        this.precios = ['10000'];
        break;
      case 'Carne':
        this.precios = ['10000'];
        break;
      case 'Arroz con pollo':
        this.precios = ['5000', '7500']
        break;
        case 'Salchipapa':
        this.precios = ['4000', '7000']
        break;
        case 'Hamburguesa':
          this.precios = ['6000', '8000']
          break;
          case 'Salchipapa':
        this.precios = ['4000', '7000']
        break;
        case 'Sandwich':
          this.precios = ['6000', '8000']
          break;
          case 'Patacon rrelleno':
        this.precios = ['4000', '7000']
        break;

        
    }
}

}

  






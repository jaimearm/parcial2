import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {

  platos:Array<any> = [];
  platosDesayuno:Array<any> = [];
  platosAlmuerzo:Array<any> = [];
  platosCena:Array<any> = [];


  documento: string = '';
  nombre: string = '';
  tipo_cliente: string = '';  //si es docente, estudiante o administrativo
  programa: string = '';
  genero: string = '';
  fecha: string = '';

  plato_id: string = '';

  private url = 'http://localhost/bienestar/controller/api.php'

  constructor(
    public alertionic:AlertController,
    private http : HttpClient,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getPlatos();
  }

  public getPlatos(){
    this.http.get<any>(this.url)
      .subscribe(res =>{
        this.platos = res;
        console.log(this.platos);
        this.guardarPlatosPorId();
    });
  }

  public guardarPlatosPorId() {
    this.platos.forEach((plato) => {
      if (plato.tipo === 1) {
         this.platosDesayuno.push(plato);
      } else if (plato.tipo === 2) {
         this.platosAlmuerzo.push(plato);
      } else if (plato.tipo === 3){
         this.platosCena.push(plato);
      }
    });
  }

  enviarDatos() {
    const documento = this.documento;
    const nombre = this.nombre;
    const tipo_cliente = this.tipo_cliente;
    const programa = this.programa;
    const genero = this.genero;
    const plato_id = this.plato_id;
    const fecha = this.fecha;

    this.apiService.enviarDatos(documento, nombre, tipo_cliente, programa, genero, plato_id, fecha)
      .subscribe(response => {
        console.log('Datos enviados correctamente');
        // Realiza cualquier acción adicional necesaria
      });
  }

  // async presentAlert() {
  //   const alert = await this.alertionic.create({
  //     header: 'Grcias por llenar el formulario',
  //     subHeader: 'Reserva correcta',
  //     message: 'nos vemos en otra ocasion!',
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }

  // selectedComida: string = '';
  // selectedCena: string = '';
  // selectedPrecio: string = '';
  // comidas: string[] = ['Desayuno', 'Almuerzo', 'Cena'];
  // food: string[] = [];
  // precios: string[] = [];

  // updateFood() {
  //   switch (this.selectedComida) {
  //     case 'Desayuno':
  //       this.food = ['Arepa rellena', 'Wafles', 'Huevo con arepa', 'Tostadas con huevo'];
  //       break;
  //     case 'Almuerzo':
  //       this.food = ['Pescado', 'Pollo', 'Carne','Arroz con pollo'];
  //       break;
  //     case 'Cena':
  //       this.food = ['Salchipapa', 'Hamburguesa','Sandwich','Patacon rrelleno'];
  //       break;
  //     default:
  //       this.food = [];
  //       break;
  //   }
  //   this.selectedCena = '';
  //   this.selectedPrecio = '';
  // }

  // updatePrice() {
  //   switch (this.selectedCena) {
  //     case 'Arepa rellena':
  //       this.precios = ['2000', '3000', '4000'];
  //       break;
  //     case 'Wafles':
  //       this.precios = ['5000', '10000'];
  //       break;
  //     case 'Huevo con arepa':
  //       this.precios = ['3000'];
  //       break;
  //     case 'Tostadas con huevo':
  //       this.precios = ['3500'];
  //       break;
  //     case 'Pescado':
  //       this.precios = ['7000'];
  //       break;
  //     case 'Pollo':
  //       this.precios = ['10000'];
  //       break;
  //     case 'Carne':
  //       this.precios = ['10000'];
  //       break;
  //     case 'Arroz con pollo':
  //       this.precios = ['5000', '7500']
  //       break;
  //       case 'Salchipapa':
  //       this.precios = ['4000', '7000']
  //       break;
  //       case 'Hamburguesa':
  //         this.precios = ['6000', '8000']
  //         break;
  //         case 'Salchipapa':
  //       this.precios = ['4000', '7000']
  //       break;
  //       case 'Sandwich':
  //         this.precios = ['6000', '8000']
  //         break;
  //         case 'Patacon rrelleno':
  //       this.precios = ['4000', '7000']
  //       break;

        
  //   }
  // }
}

  






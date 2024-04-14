import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  implements OnInit{

  public menuBarItems:MenuItem[] =[];

  ngOnInit(): void {

    this.menuBarItems=[

      {
        label:'Pipes de Angular',icon:'pi pi-fw pi-descktop',items:[
          {
          label:'Textos y Fechas',icon:'pi pi-align-left',routerLink:'./'
         },
          {
            label:'Numeros',icon:'pi pi-dollar',routerLink:'./numbers'
          },
          {
            label:'No comunes',icon:'pi pi-globe',routerLink:'./uncommon'
          }
        ]
      },
      {label:'Pipes Personalizados',icon:'pi pi-cog',items:[
        {
          label:'Custom Pipes',icon:'pi pi-cog',routerLink:'./custom'


        },
       ]
      },
    ]
  }
}


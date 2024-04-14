import { Component } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'MiGuEl AuDe'
  constructor( private primengConfig:PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple=true;
  }
}

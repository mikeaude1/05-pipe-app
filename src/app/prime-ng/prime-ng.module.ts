import { NgModule } from '@angular/core';
//import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports:[
    //MenuModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule {

}

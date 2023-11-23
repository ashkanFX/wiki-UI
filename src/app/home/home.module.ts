import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {ShareModule} from "../shared/share.module";
import {TranslateModule} from "@ngx-translate/core";
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardComponent } from '../shared/card/card.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [

    CommonModule,
    TieredMenuModule,
    HomeRoutingModule,
    DividerModule,
    SplitterModule,
    ShareModule,
    TranslateModule
  ],
  exports: []
})
export class HomeModule {
}

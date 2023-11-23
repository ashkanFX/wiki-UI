import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
 import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {CardComponent} from "./card/card.component";
import { TextFilterPipe } from './pipes/text-filter.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    TextFilterPipe
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, BrowserAnimationsModule, MenubarModule,
    CardModule,
    ButtonModule
  ]
})
export class ShareModule { }

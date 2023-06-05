import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import ReactiveFormsModule from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterpagePageRoutingModule } from './registerpage-routing.module';

import { RegisterPage } from './registerpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    RegisterpagePageRoutingModule,
  ],
  declarations: [RegisterPage],
})
export class RegisterpagePageModule {}

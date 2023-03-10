import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [...fromComponents.components],

  exports:[
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ...fromComponents.components	
]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world.component';



@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  exports: [
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HelloWorldModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './app-routing.module';
import { PoButtonModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    PoButtonModule,
    PoTableModule
  ]
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from '../app/orders/order/order.component';
import { OrdersComponent } from '../app/orders/orders.component';

import { OrderdetailsComponent } from '../app/orders/orderdetails/orderdetails.component';
import { ApiService } from './shared/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {NgToastModule} from 'ng-angular-popup'


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrdersComponent,

    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgToastModule,
   
  ],
//  entryComponents:[OrderdetailsComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}

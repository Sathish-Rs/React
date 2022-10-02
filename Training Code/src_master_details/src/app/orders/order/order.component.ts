import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogModule , MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Order } from 'src/app/shared/order.model';
import { Orderdetails } from 'src/app/shared/orderdetails.model';
import{OrderdetailsComponent} from '../orderdetails/orderdetails.component'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public service:ApiService,
    private dialog: MatDialog,private currentRoute: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    let orderID = this.currentRoute.snapshot.paramMap.get('id');
    //this.service.OrderData.DeletedOrderItemIDs=''
    if (orderID == null)
    {
      this.resetForm();
    }
      
    else {
      this.service.getOrderByID(parseInt(orderID)).then((res: { order: Order; orderDetails: any; }) => {
        this.service.OrderData = res.order;
        this.service.OrderDetailsList = res.orderDetails;
      });
    }
    this.service.getcustomerList();

  }
  resetForm(form?: NgForm) {
    
 
    this.service.OrderData = {
      orderId: 0,
      orderNumber: Math.floor(100000 + Math.random() * 900000).toString(),
      customerId: 0,
      total: 0,
      DeletedOrderItemIDs:''
    };
    this.service.OrderDetailsList=[];
  }
  onSubmit(data:NgForm)
  {

    this.service.saveOrUpdateOrder().subscribe(res => {
      this.resetForm()
     this.route.navigate(['/orders'])
    }
      
      );
      
    
  }

  AddOrEditOrderItem(orderItemIndex: any, OrderID: number) {
    

//console.log(OrderID);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(OrderdetailsComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal()});
    // this.dialog.open(OrderdetailsComponent, dialogConfig)
  }

  updateGrandTotal() {
    this.service.OrderData.total = this.service.OrderDetailsList.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
    this.service.OrderData.total = parseFloat(this.service.OrderData.total.toFixed(2));

  }

  onDeleteOrderItem(orderItemID: number, i: number)
  {
    if (orderItemID != null)
    this.service.OrderData.DeletedOrderItemIDs += orderItemID + ",";
  this.service.OrderDetailsList.splice(i, 1);
  this.updateGrandTotal();
  
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  isValid!:boolean;
  constructor(public service:ApiService,@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef: MatDialogRef<OrderdetailsComponent>,
) { }

  ngOnInit(): void {
    this.service.getproductList();
    if (this.data.orderItemIndex == null)
      this.service.OrderDetailsData = {
        orderItemId: 0,
        orderId: this.data.OrderID,
        itemId: 0,
        itemName: '',
        price: 0,
        qty: 0,
        total: 0
      }
    else
      this.service.OrderDetailsData = Object.assign({}, this.service.OrderDetailsList[this.data.orderItemIndex]);

  }

  updatePrice(ctrl:any) {
    if (ctrl.selectedIndex == 0) {
      this.service.OrderDetailsData.price = 0;
      this.service.OrderDetailsData.itemName = '';
    }
    else {
      this.service.OrderDetailsData.price = this.service.productList[ctrl.selectedIndex - 1].price;
      this.service.OrderDetailsData.itemName = this.service.productList[ctrl.selectedIndex - 1].itemName;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.service.OrderDetailsData.total = parseFloat((this.service.OrderDetailsData.qty * this.service.OrderDetailsData.price).toFixed(2));
  }

  onSubmit(form: NgForm) {
    
    if (this.validateForm(form.value))
    {
      if (this.data.orderItemIndex == null)
        this.service.OrderDetailsList.push(form.value);
      else
        this.service.OrderDetailsList[this.data.orderItemIndex] = form.value;
      this.dialogRef.close();
    }
  
  
  }

  

  validateForm(formData: any) {
    this.isValid = true;
    if (formData.itemId == 0)
      this.isValid = false;
    else if (formData.qty == 0)
      this.isValid = false;
    return this.isValid;
  }




}

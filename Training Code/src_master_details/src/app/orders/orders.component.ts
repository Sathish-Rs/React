import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public service:ApiService,private route:Router,private toast : NgToastService) { }

  ngOnInit(): void {
    this.service.getorderList();
  }

  onOrderDelete(id:number)
  {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteOrder(id).then(res => {
        this.service.getorderList();
     
      this.toast.error({detail:'Deleted Message',summary:'This is delete summary',duration:5000}); 

      });
    }

  }
  openForEdit(id:number)
  {
    
    this.route.navigate(['/order/edit/' + id]);

  }
}

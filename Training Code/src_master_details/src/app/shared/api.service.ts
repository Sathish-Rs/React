import { Injectable } from '@angular/core';
import{ Order } from '../shared/order.model'
import{HttpClient} from '@angular/common/http'
import { Customer } from './customer.model';
import { Orderdetails } from './orderdetails.model';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly baseurl ='https://localhost:44344/api';
  OrderData:Order = new Order();
  orderlist!: Order[];
  OrderDetailsData:Orderdetails = new Orderdetails();
  OrderDetailsList!:Orderdetails[];
  coutomerList!: Customer[];
  productList!:Product[];

  constructor(public http:HttpClient) { }

  saveOrUpdateOrder() {
    var body = {
      ...this.OrderData,
      OrderDetails: this.OrderDetailsList
    };
    return this.http.post(this.baseurl + '/Orders', body);
  }


  deleteOrder(id:number) {
    return this.http.delete(this.baseurl + '/Orders/'+id).toPromise();
  }


  getOrderByID(id:number):any {
    return this.http.get(this.baseurl + '/Orders/'+id).toPromise();
  }

  getorderList()
  {
    this.http.get<Order[]>(this.baseurl+'/Orders').subscribe(
      res=>this.orderlist = res as Order[])
    
  }
  getcustomerList()
  {
    this.http.get<Customer[]>(this.baseurl+'/Customers').subscribe(
      res=>this.coutomerList = res as Customer[])
    
  }
  getproductList()
  {
    this.http.get<Product[]>(this.baseurl+'/Products').subscribe(
      res=>this.productList = res as Product[])
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _baseUrl = environment.backend_api;
  constructor(private http: HttpClient, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }


  loginpost(object: any) {
    return this.http.post(this._baseUrl + 'login', object).toPromise();
  }

  postProduct(object: any) {
    return this.http.post(this._baseUrl + 'items', object).toPromise();
  }

  putProduct(object: any) {
    return this.http.put(this._baseUrl + 'items/' + object.productId, object).toPromise();
  }

  getAllProductList() {
    return this.http.get(this._baseUrl + 'items').toPromise();
  }

  postBill(object: any) {
    return this.http.post(this._baseUrl + 'bill', object).toPromise();
  }

  getBills() {
    return this.http.get(this._baseUrl + 'bill').toPromise();
  }


  async getCustomer() {
    let result = this.http.get(this._baseUrl + 'customers');
    return await lastValueFrom(result)
  }

  postPurchasingFormData(data: any) {
    return this.http.post(this._baseUrl + 'purchasing', data).toPromise();
  }

  getPurchasingFormData(){
    return this.http.get(this._baseUrl + 'purchasing').toPromise();
  }

  getDataByCustomerNameProductId(object:any){
    return this.http.get(this._baseUrl + `customers/${object.bill_no}/${object.product_id}`).toPromise();
  }

}

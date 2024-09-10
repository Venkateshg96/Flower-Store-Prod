import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class adminProductService {

  constructor(private http:HttpClient,
    private router:Router) { }


    getProducts(){
        return this.http.get("https://adminservice-u50362uv.b4a.run/api/v1/admin/product/getAllProducts/all")
    }

    saveProduct(product:any){
      return this.http.post("https://adminservice-u50362uv.b4a.run/api/v1/admin/product/addProduct",product)
    }

    deleteProductById(productId:number){
      return this.http.delete("https://adminservice-u50362uv.b4a.run/api/v1/admin/product/delete/"+productId)

    }

    editProduct(editedProduct:any){
      return this.http.put("https://adminservice-u50362uv.b4a.run/api/v1/admin/product/update",editedProduct)
    }

}



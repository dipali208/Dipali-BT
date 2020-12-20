import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncrdecrService {

  constructor() { }

  seceteKey:string="thisiskey";
  encryptedData:any;
  data:any;
  set(Email:any,pass:any)
  {
    this.data={
      id:Email,
      password:pass
    };
    this.encryptedData=CryptoJS.AES.encrypt(JSON.stringify(this.data),this.seceteKey).toString();
    return this.encryptedData;
  }
  get(data:any)
  {
    let bytes =CryptoJS.AES.decrypt(data,this.seceteKey);
    var obj=JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return obj.password;
  }

}

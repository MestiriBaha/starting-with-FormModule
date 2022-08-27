import { Injectable } from '@angular/core';
import {FormSettings} from "./form-settings";
import {Observable} from "rxjs";
import {of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService : HttpClient) { }
  postUserSettingsForm(userSettings : FormSettings) : Observable<any>
  {
  //return of(userSettings) => Fake Observable !!
    return this.httpService.post('https://putsreq.com/H0Yofi0DwsO0IUGstQzc',userSettings) ;
  }

  getsubscriptionTypes() : Observable<string[]> {
    // throw new Error("Method is not implemented")
    return of(['monthly','annually','lifetime'])
  }

}

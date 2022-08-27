import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {FormSettings} from "../Data/form-settings";
import {DataService} from "../Data/data.service";
import {Observable} from "rxjs";
import {of} from "rxjs";
//import {variable} from "@angular/compiler";
//import {variable} from "@angular/compiler";
//import {variable} from "@angular/compiler";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  startTime! : Date ;
  startDate! : Date ;
  singleModel="false"
  subscriptionTypes! : Observable<string[]> ;
  OriginaluserSettings  : FormSettings = {
    name : '' ,
    AcceptTerms : false ,
    radioStyle : '' ,
    choice : ' ' ,
    password : ' ' ,
    color : ''

  };
  postError = false ;
  postErrorMessage = '' ;
  userSettings : FormSettings = { ...this.OriginaluserSettings};
  onHttpError(errorResponse : any )
  {
    console.log('error',errorResponse) ;
    this.postError = true ;
    this.postErrorMessage=errorResponse.error.errorMessage

  }
  constructor(private dataService : DataService) { }
  onSubmit(test : NgForm)
  {
    console.log("success",test.value)
   // if (test.valid) { console.log('in onsubmit : ', test.valid) ;
    //this.dataService.postUserSettingsForm(this.userSettings).subscribe(result=>console.log('success',result)
    //  ,error =>this.onHttpError(error)) }
   // else {
   //   this.postError = true ;
   //   this.postErrorMessage = " please check the bugs !! "
   // }
  }
  onBlur(test :   NgModel) {
     console.log(" in onBlur : ",test.valid)

  }
  ngOnInit(): void {
   this.subscriptionTypes=this.dataService.getsubscriptionTypes()
  this.startDate = new Date()
    this.startTime = new Date()
  }

}

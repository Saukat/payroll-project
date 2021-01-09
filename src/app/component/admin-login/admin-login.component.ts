import { HttpErrorResponse } from '@angular/common/http';
import { IfStmt, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { parse } from 'querystring';
import { AdminLoginService } from 'src/app/appService/admin-login.service';
import { ConAdminLoginService } from 'src/app/connectixService/Admin/con-admin-login.service';
import { AdminLogin } from 'src/app/models/admin-login';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  islogin:any=true;
  adminData
  adminloginForm:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private adminloginService:AdminLoginService,private _adminloginSer:ConAdminLoginService,private router:Router) { 
    this.adminloginForm=fb.group({  //group the whole data into formLogicalName object
      email:[''],
      password:['']
   })
  }
  ngOnInit() {
            this.adminData=this.adminloginService.adminData;
       
  }
  
  ddlVal
  onOptionsSelected(value){
    this.ddlVal=value
      console.log("ddl",this.ddlVal);
      
  }


  //onSubmit data
  onLoginForm(){

   let email=this.adminloginForm.value.email;
   let password=this.adminloginForm.value.password;

   let adminLogin:AdminLogin={
     email,
     password
   }
     this.matchCredential(adminLogin);
    return adminLogin;
  
   
    //console.log("side:::",this.islogin);
  }

  statusLogin:any;
  matchCredential(adminLogin){
     //  console.log(this.adminloginForm.value);
  if(this.ddlVal == "1"){
    console.log("admin")
    //this.islogin= this.adminloginService.adminLoginCredential(this.adminloginForm.value)

    let p:any=[];
  
     this._adminloginSer.adminCredential(adminLogin).subscribe(
     response=>{
            // let data=response.message;
            // console.log("message",response)
           
          this.statusLogin=response["status"]
          console.log("Status",this.statusLogin);
          if(this.statusLogin == "OK"){
            this.router.navigate(['dashboard'])
            console.log("Login")
          }else if(this.statusLogin == "Failed"){
            console.log("Failed");
          }
           
   
            
            // console.log('JSON Response = ', JSON.stringify(response));
     },error=>{
              console.log("Error")
     }
   )
      
  
   }else if(this.ddlVal == "2"){
     console.log("Employee")
    this.islogin= this.adminloginService.employeeCredential(this.adminloginForm.value);
   
   }else{
       console.log("error")
   }
  }

  

}

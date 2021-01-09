import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeProfileService } from 'src/app/employeeService/employee-profile.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  oneRecordBasedOnEmail;
  constructor(private empProfileService:EmployeeProfileService,private route:ActivatedRoute) { }
  email
  ngOnInit() {
    this.email = this.route.snapshot.params['email']; 
    console.log("Email ====>",this.email)  
       
    this.empProfileService.email=this.email;

     this.oneRecordBasedOnEmail=this.empProfileService.getAllDataOfEmployeeReg(this.email);
     console.log(this.oneRecordBasedOnEmail.photo)
  }

}

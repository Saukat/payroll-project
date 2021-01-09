import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { observable, Observable, Subscriber } from 'rxjs';
import { EmployeeService } from 'src/app/appService/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {
  myimage: Observable<any>;
  newBaseUrl;
  employee:any={}
  employeeRegForm:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private empService:EmployeeService) { 
    this.employeeRegForm=fb.group({  //group the whole data into formLogicalName object
      employeeId:[''],
      title:[''],
      name:[''],
      email:[''],
      hireDate:[''],
      jobTitle:[''],
      location:[''],
      department:[''],
      rollType:[''],
      gender:['']
   })
  }
  
  ngOnInit() {
    
  }
 
   
   photo="./assets/images/profile.jpg";
   onEmployeeRegForm(){



    let employeeId=this.employeeRegForm.value.employeeId;
    let title=this.employeeRegForm.value.title;
    let name=this.employeeRegForm.value.name;
    let email=this.employeeRegForm.value.email;
    let hireDate=this.employeeRegForm.value.hireDate;
    let jobTitle=this.employeeRegForm.value.jobTitle;
    let location=this.employeeRegForm.value.location;
    let department=this.employeeRegForm.value.department;
    let rollType=this.employeeRegForm.value.rollType;
    let gender=this.employeeRegForm.value.gender;
     //asign Base64 data int photo
     let photo=this.employeeRegForm.value["photo"]=this.image;
        this.photo=photo
  
    let employee:Employee={
      employeeId,
      title,
      name,
      email,
      hireDate,
      jobTitle,
      location,
      department,
      rollType,
      gender,
      photo
     

       
    }
   // console.log("Register Data:"+JSON.stringify(employee)); 
    this.saveEmployee(employee);
    return employee;

     
  }





  saveEmployee(emp){

    console.log(emp)
     // this.employee=Object.assign(this.employee,emp);
      this.empService.addEmployee(emp);
     
    
  }


 
  
  
  
  // url="./assets/images/profile.jpg";
  // selectedImage:any=null;
//conevrt into base64
image;

onFileSelected($event) : void {
  this.readThis($event.target);
 
  
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.image = myReader.result;
     this.photo=this.image
  }
  myReader.readAsDataURL(file);
 
}





}

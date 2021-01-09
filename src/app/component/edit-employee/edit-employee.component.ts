import { JsonPipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/appService/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id;
  singleData;
  employeeRegForm:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private empService:EmployeeService,private location:Location) { 
    this.employeeRegForm=fb.group({  //group the whole data into formLogicalName object
      id:[''],
      title:[''],
      name:[''],
      email:[''],
      hireDate:[''],
      jobTitle:[''],
      location:[''],
      department:[''],
      rollType:[''],
      gender:[''],
      photo:[null]

      // :[''],
   })
  }
 
photo;
  ngOnInit() {
    // debugger;
      this.singleData=this.empService.editData  //get Data from empService of editData
      console.log("emp::",this.singleData);
      this.photo=this.singleData[0].photo;

   
      //patch value into form
      this.employeeRegForm.patchValue({
        id: this.singleData[0].id,
        title:this.singleData[0].title,
        name:this.singleData[0].name,
        email: this.singleData[0].email,
        hireDate:this.singleData[0].hireDate,
        jobTitle:this.singleData[0].jobTitle,
        location: this.singleData[0].location,
        department:this.singleData[0].department,
        rollType:this.singleData[0].rollType,
        gender:this.singleData[0].gender,
        photo:this.singleData[0].photo
       
       
      })

      
   
  }
  onEditEmployeeRegForm(){
    // debugger
    // if(this.employeeRegForm.value.photo === this.image){
    //    console.log("undefinede dara")
    //    this.employeeRegForm.value.photo=this.photo;

    //    let photo=this.employeeRegForm.value["photo"]=this.image;
    //   }else{
    //     console.log("data")
    //    this.employeeRegForm.value.photo=this.photo;

    //   }
    //   console.log("Employee Update data",this.employeeRegForm.value.photo)
      
         


     
      //asign Base64 data int employeeRegForm
      let photo=this.employeeRegForm.value["photo"]=this.image;
      
       let employees=JSON.parse(localStorage.getItem('EmployeesRegisterData'))


       


         for (var i = 0; i < employees.length; ++i) {
            if (employees[i].id === this.employeeRegForm.value.id) {
              employees[i] = this.employeeRegForm.value;
              localStorage.setItem('EmployeesRegisterData',JSON.stringify(employees))
            }
          }
          console.log("emp Data:",employees);
          // this.router.navigate(['..'])
          this.location.back();
          

  
  }




//convert base64
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

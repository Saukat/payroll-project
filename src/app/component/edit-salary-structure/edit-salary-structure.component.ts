import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaryStructureService } from 'src/app/appService/salary-structure.service';

@Component({
  selector: 'app-edit-salary-structure',
  templateUrl: './edit-salary-structure.component.html',
  styleUrls: ['./edit-salary-structure.component.css']
})
export class EditSalaryStructureComponent implements OnInit {

  editSalaryStructure:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private location:Location,private route:ActivatedRoute,private router:Router,private salaryService:SalaryStructureService) { 
    this.editSalaryStructure=fb.group({  //group the whole data into formLogicalName object
      id:[''],
     
      basic:[''],
      hra:[''],
      conveyanceAllowance:[''],
      otherAllowance:[''],
      grossPay:[''],
      employeeEpf:[''],
      employeeESI:[''],
      netSalary:[''],
      employerEpf:[''],
      employerESI:[''],
      totalCostToCompany:['']
     
   })
  }

  ngOnInit() {
    let editSalaryStructure=this.salaryService.editSalaryStructureData;
    console.log("Edit Data:",editSalaryStructure);
    
    
    //patch value into form
    this.editSalaryStructure.patchValue({
      id: editSalaryStructure[0].id,
     
      basic:editSalaryStructure[0].basic,
      hra: editSalaryStructure[0].hra,
      conveyanceAllowance:editSalaryStructure[0].conveyanceAllowance,
      otherAllowance:editSalaryStructure[0].otherAllowance,
      grossPay:editSalaryStructure[0].grossPay,

      employeeEpf:editSalaryStructure[0].employeeEpf,
      employeeESI:editSalaryStructure[0].employeeESI,
      netSalary:editSalaryStructure[0].netSalary,
      employerEpf:editSalaryStructure[0].employerEpf,
      employerESI:editSalaryStructure[0].employerESI,

      totalCostToCompany:editSalaryStructure[0].totalCostToCompany,




      
     
   })
  }
  onEditSalaryStructureForm(){
    console.log(this.editSalaryStructure.value)



    let SalaryStructureDetails=JSON.parse(localStorage.getItem('SalaryStructureDetails'))
    console.log("SalaryStructureDetails",SalaryStructureDetails)

         for (var i = 0; i < SalaryStructureDetails.length; ++i) {
            if (SalaryStructureDetails[i].id === this.editSalaryStructure.value.id) {
              SalaryStructureDetails[i] = this.editSalaryStructure.value;
              localStorage.setItem('SalaryStructureDetails',JSON.stringify(SalaryStructureDetails))
            }
          }
          console.log("emp SalaryStructureDetails Data:",SalaryStructureDetails);
         
         this.location.back();//abck to previous component
  }

}

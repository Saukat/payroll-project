import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { PayrollDetailsService } from './payroll-details.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryStructureService {

  editSalaryStructureData;
  constructor(private location:Location,private payrollService:PayrollDetailsService) { }




  saveSalaryStructure(salaryDetails){
     //SEND TO PAYROLL SERVICE
     
     
    

     

    let allSalaryStructureDetails=[]
  if(localStorage.getItem('SalaryStructureDetails')){

     allSalaryStructureDetails=JSON.parse(localStorage.getItem('SalaryStructureDetails'))
     
     allSalaryStructureDetails=[salaryDetails, ...allSalaryStructureDetails];

// allSalaryStructureDetails.map(s=>{
//              s['addition']="N/A";
//              s['deduction']="N/A";
//              s['reimbursements']="N/A";
//              s['remark']="Salary process for this month";

//              return s;
//         })
//         // save data of payroll
//         console.log("Updatesss=>",allSalaryStructureDetails);
        // this.payrollService.savePayrollDetails(this.payrollAllData);
    //  allSalaryStructureDetails=[salaryDetails, ...allSalaryStructureDetails];
      



  }else{
    allSalaryStructureDetails=[salaryDetails];
  }
  localStorage.setItem('SalaryStructureDetails',JSON.stringify(allSalaryStructureDetails));
 
      //SEND TO PAYROLL SERVICE
      this.payrollService.savePayrollDetails(salaryDetails);
    //  this.payrollService.savePayrollDetails(allSalaryStructureDetails);
  //this.router.navigate(['dashboard','allEmp']);
  this.location.back();

}

  //get Records from local storage
  getOnesalaryDetails(id){
    let salaryDetails=JSON.parse(localStorage.getItem('SalaryStructureDetails'));
    console.log("All FsalaryDetails info",salaryDetails);
    console.log("salaryDetailsr Data=>",salaryDetails);
    
    
      if (salaryDetails==null) {
        console.log(" FsalaryDetailsl No Data")
        return null;
      }if(salaryDetails[0].id !== id){
        console.log(" salaryDetails Id not Matched")
           return null;
      }else{
        let oneRecords= salaryDetails.filter(data=>{
          return data.id===id
         })
          console.log("One salaryDetailsl",oneRecords)
   
          return oneRecords;
      }
  }
}

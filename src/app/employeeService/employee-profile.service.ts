import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {

  email=new Subject<any>();

  constructor() { }

  getAllDataOfEmployeeReg(email){
     let empData=JSON.parse(localStorage.getItem('EmployeesRegisterData'));

     let singleEmp=empData.filter((data,index)=>{
      return data.email==email
         })
      console.log("one Records",singleEmp)

      return singleEmp;
   
  }

  //get single employee salary data
  getSingleEmpSalaryData(id){
    let empSalData=JSON.parse(localStorage.getItem('SalaryStructureDetails'));
       console.log("sallll",empSalData)
    let singleEmp=empSalData.filter((data,index)=>{
     return data.id==id
        })
     console.log("one Records",singleEmp)

     return singleEmp;
  
 }

//get single employee payment information
getSingleEmpPaymentInfo(id){
  let empSalData=JSON.parse(localStorage.getItem('PaymentInfoDetails'));
     console.log("sallll",empSalData)
  let singleEmp=empSalData.filter((data,index)=>{
   return data.id==id
      })
   console.log("one Records",singleEmp)

   return singleEmp;

}

//get single employee Payroll
getSingleEmpPayroll(id){
  let empPayroll=JSON.parse(localStorage.getItem('Payrolldetails'));
     console.log("sallll",empPayroll)
  let singleEmp=empPayroll.filter((data,index)=>{
   return data.id==id
      })
   console.log("one Records",singleEmp)

   return singleEmp;

}

}

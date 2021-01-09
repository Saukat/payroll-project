
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/appService/employee.service';
import { FiscalYearService } from 'src/app/appService/fiscal-year.service';
import { OtherInfoService } from 'src/app/appService/other-info.service';
import { PaymentService } from 'src/app/appService/payment.service';
import { ProvidentFundService } from 'src/app/appService/provident-fund.service';

import { SalaryStructureService } from 'src/app/appService/salary-structure.service';

@Component({
  selector: 'app-single-emp-details',
  templateUrl: './single-emp-details.component.html',
  styleUrls: ['./single-emp-details.component.css']
})
export class SingleEmpDetailsComponent implements OnInit {
   id;
   singleEmpData;

   //getOne records of employee sign up
   empArr_StringData;//single empDetails
   allData;
   
   //otherInfo Single records
    otherInfoSingleRecords;
   salDetails;//salary_details
  
   //OtherInfo get Value
   isRecords;
   nullRecords;

   //provident Fund Data
   providentFundSingleData
   isProvidentFund;

   //payment info
   paymentInfoSingleData
   isPayment

   //fiscal Yaer 
   fiscalYearSingleData
   isFiscalYear

   //Salary Stucture
   salarySingleData
   isSalayStructure

   empSalDetailsForm;//formLogicalName
  constructor(private route:ActivatedRoute,
    private empService:EmployeeService,
    private router:Router,
    private fb:FormBuilder,
    private otherInfoService:OtherInfoService,
    private providentFundService:ProvidentFundService,
    private paymentService:PaymentService,
    private fiscalYearService:FiscalYearService,
    private salStructureService:SalaryStructureService) {
    
   }

  ngOnInit() {

    // let oneRecords=localStorage.getItem('EmpAnnualLeaveSalSetails');
    // console.log("all Data",oneRecords);
     
   //get
   


    this.id = this.route.snapshot.params['id'];  //getting from all-employee-component
 
    //get one records of EmpDetails
     this.empArr_StringData=this.empService.getOneEmpDetails(this.id);
    // console.log("Single Data",this.empArr_StringData)

    
    //get One Records of Salary Structure
    this.salarySingleData=this.salStructureService.getOnesalaryDetails(this.id);
    console.log("Single Data of salarySingleData",this.salarySingleData)
    if(this.salarySingleData== null){
      
     this.isSalayStructure="Null";
     console.log("Null data print of salarySingleData",this.isFiscalYear)
    }else if (this.salarySingleData.length== 0) {
      console.log("NOOOO DATATA Found")
      this.isSalayStructure="Null";
    }
    else{
     this.isSalayStructure=this.salarySingleData;
    console.log("Id based Data isSalayStructure ",this.isSalayStructure);

    }





    //get One Records of Fiscal Yaer Info
    this.fiscalYearSingleData=this.fiscalYearService.getOneFiscalYear(this.id);
    console.log("Single Data of fiscalYearSingleData",this.fiscalYearSingleData)
    if(this.fiscalYearSingleData== null){
      
     this.isFiscalYear="Null";
     console.log("Null data print of Payment Data",this.isFiscalYear)
    }else if (this.fiscalYearSingleData.length== 0) {
      console.log("NOOOO DATATA Found")
      this.isFiscalYear="Null";
    }
    else{
     this.isFiscalYear=this.fiscalYearSingleData
    console.log("Id based Data isFiscalYear ",this.isFiscalYear)
    }

    


    //get One Records of Payment Info
    this.paymentInfoSingleData=this.paymentService.getOneEmpPaymentInfo(this.id);
    console.log("Single Data of Payment info",this.paymentInfoSingleData)
    if(this.paymentInfoSingleData== null){
      
     this.isPayment="Null";
     console.log("Null data print of Payment Data",this.isPayment)
    }else if (this.paymentInfoSingleData.length== 0) {
      console.log("NOOOO DATATA Found")
      this.isPayment="Null";
    }
    else{
     this.isPayment=this.paymentInfoSingleData
    console.log("Id based Data provident ",this.isPayment)
    }



   
    //get One Records of Provident fund Based on Id
        this.providentFundSingleData=this.providentFundService.getOneEmpProvidentFund(this.id);
        console.log("Single Data of Provident fund",this.providentFundSingleData)
        if(this.providentFundSingleData== null){
          
         this.isProvidentFund="Null";
         console.log("Null data print of Provident",this.isProvidentFund)
        }else if (this.providentFundSingleData.length== 0) {
          console.log("NOOOO DATATA Found")
          this.isProvidentFund="Null";
        }
        else{
         this.isProvidentFund=this.providentFundSingleData
        console.log("Id based Data provident ",this.isProvidentFund)
        }


  // debugger;
   //get one records of other info based on Id
    this.otherInfoSingleRecords=this.otherInfoService.getAllEmpOtherInfo(this.id);
    console.log("One Records====>",this.otherInfoSingleRecords);
    
       if(this.otherInfoSingleRecords == null){
          
         this.isRecords="Null";
        console.log("Null data print",this.isRecords)
       }else if (this.otherInfoSingleRecords.length== 0) {
        console.log("NOOOO DATATA Found")
        this.isRecords="Null";
      }
       else{
        this.isRecords=this.otherInfoSingleRecords
        console.log("Id based Data",this.isRecords)
       }




       
  }
 
  //Edit Employee Details
  EditEmployee(editData){
      this.empService.editData = editData;  //asign edit emp data to editData object
      this.router.navigate(['dashboard','update']);
  }



  //Employee Annual Salary Details
  // onEmployeeSalDetails(){
  //   // console.log(this.empSalDetailsForm.value);
  //    this.salService.getAllLeaveAndAttendanceDetails(this.empSalDetailsForm.value);
  // }
  

  //Edit Salary Struture
  EditSalryStructure(salaryDetails){
    console.log("salaryDetails Data ",salaryDetails)

    if(salaryDetails=== "Null"){
        console.log("null salaryDetails Data")
        this.router.navigate(['dashboard','salaryStructure',this.id]);
   }else{
     console.log("Data salaryDetails",salaryDetails)
     this.salStructureService.editSalaryStructureData=salaryDetails;
     this.router.navigate(['dashboard','editsalaryStructure']);
       
   }
  }



  //edit Fiscal Yaer Data
EditFiscalYear(fiscalYearData){
  console.log("fiscalYearData Data ",fiscalYearData)

  if(fiscalYearData=== "Null"){
      console.log("null fiscalYearData Data")
      this.router.navigate(['dashboard','fiscalYear',this.id]);
 }else{
   console.log("Data fiscalYearData",fiscalYearData)
  //  this.fiscalYearService.editFiscalYearData=fiscalYearData;
  //  this.router.navigate(['dashboard','editFiscalYear']);
     
 }
}








//edit paymentData fund Data
EditPaymentInfo(paymentData){
     console.log("payment Data ",paymentData)

     if(paymentData=== "Null"){
      console.log("null payment Data")
         this.router.navigate(['dashboard','paymentInfo',this.id]);
    }else{
      console.log("Data",paymentData)
      this.paymentService.editPaymentInfoData=paymentData;
      this.router.navigate(['dashboard','editPaymentInfo']);
          // console.log("Update data=>",infoDataToUpdate)
    }
  }




  //edit Provident fund Data
  EditProvidentFund(providentFund){
     console.log("provident fund",providentFund)

     if(providentFund=== "Null"){
      console.log("null Data")
         this.router.navigate(['dashboard','providentFund',this.id]);
    }else{
      console.log("Data",providentFund)
      this.providentFundService.editProvidentData=providentFund;
      this.router.navigate(['dashboard','EditprovidentFund']);
          // console.log("Update data=>",infoDataToUpdate)
    }
  }








  //Edit Other Information
  EditOtherInfo(otherInfoData){
        console.log("otherInfo=>",this.id);
        // console.log("Data",otherInfoData);
        
        if(otherInfoData=== "Null"){
          console.log("null Data")
             this.router.navigate(['dashboard','otherInfo',this.id]);
        }else{
          console.log("Data",otherInfoData)
          this.otherInfoService.editOtherInfoData=otherInfoData;
          this.router.navigate(['dashboard','editOtherInfo']);
              // console.log("Update data=>",infoDataToUpdate)
        }
        // this.empService.editData = editData;
      // this.router.navigate(['dashboard','otherInfo',id]);
  }


  
}

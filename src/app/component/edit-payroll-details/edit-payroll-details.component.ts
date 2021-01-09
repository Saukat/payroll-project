import { DatePipe, Location } from '@angular/common';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PayrollDetailsService } from 'src/app/appService/payroll-details.service';
import { PayrollDetails } from 'src/app/models/payroll-details';

@Component({
  selector: 'app-edit-payroll-details',
  templateUrl: './edit-payroll-details.component.html',
  styleUrls: ['./edit-payroll-details.component.css']
})
export class EditPayrollDetailsComponent implements OnInit {
  payrollData



  editPayrollForm:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private location:Location,private payrollService:PayrollDetailsService,private datePipe:DatePipe) { 
     
    this.editPayrollForm=fb.group({  //group the whole data into formLogicalName object
      id:[''],
      name:[''],
      totalCostToCompany:[''],
      grossPay:[''],
      netSalary:[''],
      // dateOfProcess:[''],
      addition:[''],
      deduction:[''],
      reimbursements:[''],
      remark:[''],
      status:['']
   })
  }

  //store date 
  date;
  
  ngOnInit() {
   
    this.dateOfRemrak();
   
     
         this.payrollData=this.payrollService.getPayrollAllData;

         console.log("Edit Payroll Details=>",this.payrollData)
           console.log("Data=>",this.payrollData.id)

         //patch value into form
            this.editPayrollForm.patchValue({
              id:this.payrollData.id,
              name:this.payrollData.name,
              totalCostToCompany:this.payrollData.totalCostToCompany,
              grossPay:this.payrollData.grossPay,
              netSalary:this.payrollData.netSalary,


              addition:this.payrollData.addition=0.0,
              deduction:this.payrollData.deduction=0.0,
              reimbursements:this.payrollData.reimbursements=0.0,
              remark:this.payrollData.remark,
              status:this.payrollData.status
              // id:this.payrollData[0][0].id,
              // name:this.payrollData[0][0].name,
              // totalCostToCompany:this.payrollData[0][0].totalCostToCompany,
              // grossPay:this.payrollData[0][0].grossPay,
              // addition:this.payrollData[0][0].addition,
              // deduction:this.payrollData[0][0].deduction,
              // reimbursements:this.payrollData[0][0].reimbursements,
              // remark:this.payrollData[0][0].remark,
              // status:this.payrollData[0][0].status
          })



  }

  dateOfRemrak(){
    let p=new Date();
    let mon= p.toLocaleString('default', { month: 'long'})
    console.log(mon)
   
    // let mom= mon.toLocaleString('default', { month: 'long'})
     let years=this.datePipe.transform(p, 'yyyy');
     console.log(years);

     this.date='Salary for '.concat(mon,"-",years);
     console.log(this.date)
  }

   netSal;
   onDbClickForAddition(data){
    let addValue=parseFloat(data.target.value)
    let netSalary=parseFloat(this.payrollData.netSalary);
    console.log("NetSalary",netSalary);
    console.log("data",addValue);

    this.netSal=netSalary+addValue;
    console.log("Net Salary",this.netSal);    
  }

  onDbClickForDeduction(data){
    let deductionValue=parseFloat(data.target.value)
    let netSalary=parseFloat(this.payrollData.netSalary);
    this.netSal=netSalary-deductionValue;
    console.log("Net Salary",this.netSal); 
  }

  
  onEditPayrollForm(){
      
    console.log("payroll salary data",this.payrollData)
      console.log("net Salary=>",this.payrollData.netSalary);


    //  this.editPayrollForm.value.fill()


         
    console.log("DAraaa=>",this.editPayrollForm.value)
    let allPayrollData=JSON.parse(localStorage.getItem('Payrolldetails'))
    // debugger;
    console.log("Payment all",allPayrollData)

      for (var i = 0; i < allPayrollData.length; ++i) {
        if (allPayrollData[i].id === this.editPayrollForm.value.id) {
          
          allPayrollData[i] = this.editPayrollForm.value;
          localStorage.setItem('Payrolldetails',JSON.stringify(allPayrollData))
        }
      }
      console.log("emp payment Data:",allPayrollData);
    this.location.back();//abck to previous component


  }


    // for (var i = 0; i < allPayrollData[0].length; ++i) {
    //   if (allPayrollData[0][i].id === this.editPayrollForm.value.id) {

        // allPayrollData[0][i] = this.editPayrollForm.value.id;
        // allPayrollData[0][i] = this.editPayrollForm.value.name;
        // allPayrollData[0][i] = this.editPayrollForm.value.totalCostToCompany;
        // allPayrollData[0][i] = this.editPayrollForm.value.grossPay;

        // allPayrollData[0][i] = this.editPayrollForm.value.addition;
        // allPayrollData[0][i] = this.editPayrollForm.value.deduction;
        // allPayrollData[0][i] = this.editPayrollForm.value.reimbursements;
        // allPayrollData[0][i] = this.editPayrollForm.value.remark;
        // allPayrollData[0][i] = this.editPayrollForm.value.status;
        
        // console.log("allData of payroll updated",allPayrollData[0][0].deduction)
        
    //     // localStorage.setItem('Payrolldetails',JSON.stringify(allPayrollData))
    //   }
    // }
    // console.log("emp payment Data:",allPayrollData);


        //  for (var i = 0; i < allPayrollData[0].length; ++i) {
        //     if (allPayrollData[0][i].id === this.editPayrollForm.value.id) {
        //       allPayrollData[0][i] = this.editPayrollForm.value;
        //       // localStorage.setItem('Payrolldetails',JSON.stringify(allPayrollData))
        //     }
        //   }
        //   console.log("emp payment Data:",allPayrollData);
        
        // }
      // }

        //  this.location.back();
         //abck to previous component
  // }
    // console.log("Data of Payroll updated data=>",this.editPayrollForm.value)
   
    // let id=this.editPayrollForm.value.id;
    // let name=this.editPayrollForm.value.name;
    // let monthCtc=this.editPayrollForm.value.monthCtc;

    // let grossPay=this.editPayrollForm.value.grossPay;
    // let dateOfProcess=this.editPayrollForm.value.dateOfProcess;
    // let addition=this.editPayrollForm.value.addition;
    // let deduction=this.editPayrollForm.value.deduction;
    // let remark=this.editPayrollForm.value.remark;
    // let status=this.editPayrollForm.value.status;


  






















  //Calculate Addition based on gross sal
  // calAdditionBasedOnGrossSal(event:any){

  //   let addValue;
  //   addValue=0;
  //   addValue=event.target.value;
  
  //   let addInputValue:any=0;
  //        addInputValue+=addValue;

  //        console.log("Add input Value=",addInputValue);


  //   let grossSal=this.editPayrollForm.value.grossPay;
  
  //   let grossSalAct=parseFloat(grossSal) + parseFloat(addInputValue);
  //    console.log("Add value=>",grossSal)

  // if(isNaN(grossSal)==true){
    
  //   console.log("NaN Value")
  //   this.editPayrollForm.patchValue({
  //     grossPay:this.payrollData.grossPay
  //   })
    
  // }if(addInputValue <=10){
    
  //   console.log("Valueeeeeeeee")
  //   this.editPayrollForm.patchValue({
  //     grossPay:grossSalAct
  //   })
  // }else if(addInputValue <=100){
   
  //   console.log("Valueeeeeeeee")
  //   this.editPayrollForm.patchValue({
  //     grossPay:grossSalAct
  //   })
  // }
  // else if(addInputValue <=1000){
  
  //   console.log("Valueeeeeeeee")
  //   this.editPayrollForm.patchValue({
  //     grossPay:grossSalAct
  //   })
  // }else if(addInputValue <= 10000){
    
  //   console.log("Valueeeeeeeee")
  //   this.editPayrollForm.patchValue({
  //     grossPay:grossSalAct
  //   })
  // }  
  // else {
  
  //   console.log("Valueeeeeeeee")
  //   this.editPayrollForm.patchValue({
  //     grossPay:grossSalAct
  //   })
  // }
  // }

  //Calculate deduction based on gross sal
  // calDeductionBasedOnGrossSal(event:any){
  
  //   let deductionValue=event.target.value;
  //   let grossSal=this.editPayrollForm.value.grossPay;
  //   let totalGrossAfterDeduction;
  //   totalGrossAfterDeduction=parseFloat(grossSal) - parseFloat(deductionValue);
   
  //   if(isNaN(totalGrossAfterDeduction)==true){
    
  //     console.log("NaN Value")
      
  //   }else {
  //     console.log("Valueeeeeeeee")
  //     this.editPayrollForm.patchValue({
  //       grossPay:totalGrossAfterDeduction
  //     })
  //   } 
  // }

 
 

}

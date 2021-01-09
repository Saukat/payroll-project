import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PayrollDetailsService {

  constructor(private router:Router,private datePipe:DatePipe) { }

  

//getPayroll Data with the help of Service
 getPayrollAllData;

 //Save Payment Data
 //get payrollData from salary structure component
 savePayrollDetails(salaryDetails){
    console.log("hlw")

  let salaryData=salaryDetails;
    console.log("Salry Data=>",salaryData)
    

    let empRegInfo=JSON.parse(localStorage.getItem('EmployeesRegisterData'));
     console.log("Nameeeeeeeee",empRegInfo.name);
  let dataOfPayroll=[];
    dataOfPayroll['id']=salaryData.id;
    dataOfPayroll['grossPay']=salaryData.grossPay;

    dataOfPayroll['netSalary']=salaryData.netSalary;

    dataOfPayroll['totalCostToCompany']=salaryData.totalCostToCompany;
    dataOfPayroll['addition']="N/A";
    dataOfPayroll['deduction']="N/A";
    dataOfPayroll['reimbursements']="N/A";
    dataOfPayroll['remark']="Salary process for this month";
    dataOfPayroll['status']="Not Final";
    dataOfPayroll['name']=empRegInfo[0].name

    dataOfPayroll.map(e=>{
      console.log("map data=",e);
      
    })

    console.log("Payrollllllllllll",dataOfPayroll);
    // let t=JSON.stringify(dataOfPayroll);

    let x= Object.assign({},dataOfPayroll);
    console.log("x value",x)
    let payroll=[];
    if(localStorage.getItem('Payrolldetails')){
     payroll=JSON.parse(localStorage.getItem('Payrolldetails'))
    
     payroll=[x, ...payroll];
  }else{
     payroll=[x];
  }
  console.log("data  save=>",payroll)
    localStorage.setItem('Payrolldetails',JSON.stringify(payroll));



  

  
 


  // let payrollData=salaryData.map((element,ind )=> {
  //   console.log(element)
  //   dataOfPayroll['id']=element.id;
  //   dataOfPayroll['grossPay']=element.grossPay;
  //   dataOfPayroll['totalCostToCompany']=element.totalCostToCompany;
  //   return dataOfPayroll
  // });
  //  console.log("Payrollllllllllll",payrollData)

    
  
  // let empRegInfo=JSON.parse(localStorage.getItem('EmployeesRegisterData'));

  // let nameWithPayrollData = payrollData.map(p => {
  //   p['name'] = empRegInfo.find(s =>s.id == p.id).name;
  //   p['addition']="N/A";
  //   p['deduction']="N/A";
  //   p['reimbursements']="N/A";
  //   p['remark']="Salary process for this month";
  //   p['status']="Not Final";
   
  //   return p; 
  //  })
  //  console.log("name with payroll",nameWithPayrollData)






  //  let payrollDatas=nameWithPayrollData.map(s=>{
  //   s['addition']="N/A";
  //   s['deduction']="N/A";
  //   s['reimbursements']="N/A";
  //   s['remark']="Salary process for this month";
  //   s['status']="Not Final";


  //   return s;
  //  })
  //  console.log("nwww",payrollDatas);

   



//    let payroll=[];
//    if(localStorage.getItem('Payrolldetails')){
//     payroll=JSON.parse(localStorage.getItem('Payrolldetails'))
   

//     payroll=[nameWithPayrollData, ...payroll];
//  }else{
//     payroll=[nameWithPayrollData];
//  }
//  console.log("data  save=>",payroll)
//    localStorage.setItem('Payrolldetails',JSON.stringify(payroll));
  




//  for (var i = 0; i < payroll.length; ++i) {
//   if (payroll[i].id === nameWithPayrollData.id) {
//     payroll[i] = nameWithPayrollData;
//     localStorage.setItem('PaymentInfoDetails',JSON.stringify(payroll))
//   }else{
//     console.log("Not Reco")
//   }
// }
// console.log("emp payment Data:",payroll);



  //  JSON.stringify(localStorage.setItem('PayrollNewData',nameWithPayrollData));
  // return nameWithPayrollData;
  //  console.log("All Data=>",payroll)
    // this.router.navigate(['dashboard','payroll']);
  
    // this.location.back();
}



//payroll all Details
  getAllPayrollDetails(){
    // console.log("ALlllllllllll")
    // let allPayementData=JSON.parse(localStorage.getItem('PaymentInfoDetails'));
    // console.log(allPayementData[0].accNo)
  
    let allPayrollData=JSON.parse(localStorage.getItem('Payrolldetails'));
    //  console.log("emp datattat=",allPayrollData)
    // let accWithPayroll = allPayrollData.map(p => {
    //   p['accNo'] = allPayementData.find(s =>s.id == p.id).accNo;
      
    //   return p; 
    //  })
  console.log("getallData",allPayrollData)
    return allPayrollData;
  }


  getDataForPrint(){


     let allPayementData=JSON.parse(localStorage.getItem('PaymentInfoDetails'));
    console.log(allPayementData[0].accNo)
    let allPayrollData=JSON.parse(localStorage.getItem('Payrolldetails'));
     console.log("emp datattat=",allPayrollData)
    let accWithPayroll = allPayrollData.map((p,ind) => {
      p['accNo'] = allPayementData.find(s =>s.id == p.id).accNo;
      // console.log("payroll",p);
      return p; 
     })
  // console.log("Tata",accWithPayroll)
  return allPayrollData;
  }


  fhrData=[
      "FHR |15 | 08/03/2020 | Cut-Off | 50021.00| INR | 0006105027372 | 0011^"
  ];

  mdrData=[
    {"MDR":"MDR", "accNo":"006105027372", "p":"570518395","INR":"INR", "ifsc":"ICIC0000011","web":"WEB^"}
  ]


  getDataPrintForFHR(){
     
    return this.fhrData;
  }
  getDataPrintForMDR(){
     
    return this.mdrData;
  }


  date;
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
}

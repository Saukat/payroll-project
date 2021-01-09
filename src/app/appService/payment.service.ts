import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 editPaymentInfoData;
  constructor(private location:Location) { }

//Save Payment Data
  savePaymentInfo(PaymentInfoData){
    let paymentInfo=[]
  if(localStorage.getItem('PaymentInfoDetails')){
     paymentInfo=JSON.parse(localStorage.getItem('PaymentInfoDetails'))
     paymentInfo=[PaymentInfoData, ...paymentInfo];
  }else{
    paymentInfo=[PaymentInfoData];
  }
  localStorage.setItem('PaymentInfoDetails',JSON.stringify(paymentInfo))
  //this.router.navigate(['dashboard','allEmp']);
  this.location.back();
}


  //get Records from local storage
  getOneEmpPaymentInfo(id){
    let allPaymentInfo=JSON.parse(localStorage.getItem('PaymentInfoDetails'));
    console.log("All info",allPaymentInfo);
    console.log("Provident Fund Data=>",allPaymentInfo);
    
    
      if (allPaymentInfo==null) {
        console.log(" Payment No Data")
        return null;
      }if(allPaymentInfo[0].id !== id){
        console.log(" Payment Id not Matched")
           return null;
      }else{
        let oneRecords= allPaymentInfo.filter(data=>{
          return data.id===id
         })
          console.log("One Payment",oneRecords)
   
          return oneRecords;
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/appService/payment.service';
import { PaymentInfo } from 'src/app/models/payment-info';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  paymentInfoData:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private paymentService:PaymentService) { 
    this.paymentInfoData=fb.group({  //group the whole data into formLogicalName object
      id:[''],
      accNo:[''],
      aadhar:[''],
      bankName:[''],
      IfscCode:[''],
      epfo:[''],
      branch:[''],
      address:['']
     
   })
  }
 id;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];  //getting from single-emp-details
    console.log("id otherInfo ====>",this.id)  
  }

  onPaymentInfoForm(){
       console.log("payment=>",this.paymentInfoData.value);

       let id=this.paymentInfoData.value.id;
    
       let aadhar=this.paymentInfoData.value.aadhar;
       let accNo=this.paymentInfoData.value.accNo;
       let bankName=this.paymentInfoData.value.bankName;
       let IfscCode=this.paymentInfoData.value.IfscCode;
       let epfo=this.paymentInfoData.value.epfo;
       let branch=this.paymentInfoData.value.branch;
       let address=this.paymentInfoData.value.address;
   
       let paymentInfo:PaymentInfo={
        id,
        accNo,
        aadhar,
        bankName,
        IfscCode,
        epfo,
        branch,
        address,
       
     }
    this.savePaymentInfo(paymentInfo);
     return paymentInfo;
  }
  savePaymentInfo(paymentInfo){
    console.log("paymentInfo Data",paymentInfo);
    this.paymentService.savePaymentInfo(paymentInfo);  //send data to saveProvidentFund service class
  }

}

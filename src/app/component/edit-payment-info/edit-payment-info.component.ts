import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/appService/payment.service';

@Component({
  selector: 'app-edit-payment-info',
  templateUrl: './edit-payment-info.component.html',
  styleUrls: ['./edit-payment-info.component.css']
})
export class EditPaymentInfoComponent implements OnInit {

  EditPaymentInfoData:FormGroup; //hold object of admin-login form
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private location:Location,private paymentService:PaymentService) { 
    this.EditPaymentInfoData=fb.group({  //group the whole data into formLogicalName object
      id:[''],
      aadhar:[''],
      accNo:[''],
      bankName:[''],
      IfscCode:[''],
      epfo:[''],
      branch:[''],
      address:['']
     
   })
  }

  ngOnInit() {
    let editPaymentInfo=this.paymentService.editPaymentInfoData;
    console.log("Edit Data:",editPaymentInfo);
    
    
    //patch value into form
    this.EditPaymentInfoData.patchValue({
      id: editPaymentInfo[0].id,
      aadhar:editPaymentInfo[0].aadhar,
      accNo:editPaymentInfo[0].accNo,
      bankName:editPaymentInfo[0].bankName,
      IfscCode: editPaymentInfo[0].IfscCode,
      epfo:editPaymentInfo[0].epfo,
      branch:editPaymentInfo[0].branch,
      address: editPaymentInfo[0].address,
   })
  }
  onEditPaymentInfoForm(){
    console.log("Data of Payment=>",this.EditPaymentInfoData.value)



    let allPaymentInfo=JSON.parse(localStorage.getItem('PaymentInfoDetails'))
    console.log("Payment all",allPaymentInfo)

         for (var i = 0; i < allPaymentInfo.length; ++i) {
            if (allPaymentInfo[i].id === this.EditPaymentInfoData.value.id) {
              allPaymentInfo[i] = this.EditPaymentInfoData.value;
              localStorage.setItem('PaymentInfoDetails',JSON.stringify(allPaymentInfo))
            }
          }
          console.log("emp payment Data:",allPaymentInfo);
         this.location.back();//abck to previous component

  }

}

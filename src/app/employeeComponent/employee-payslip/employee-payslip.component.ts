// import { Component, OnInit } from '@angular/core';
import { EmployeeProfileService } from 'src/app/employeeService/employee-profile.service';
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-payslip',
  templateUrl: './employee-payslip.component.html',
  styleUrls: ['./employee-payslip.component.css']
})
export class EmployeePayslipComponent implements OnInit {

  constructor(private empProfileService:EmployeeProfileService,private datePipe:DatePipe) { }

  empRegData;
  empSingleSal;
  empPaymentInfo;
  empPayroll;
  totalEmpFund;
  date;

  ngOnInit() {
    console.log("slip",this.empProfileService.email);
    let email=this.empProfileService.email;
   
    this.empRegData=this.empProfileService.getAllDataOfEmployeeReg(email);
     console.log("emp single data",this.empRegData)

     let id=this.empRegData[0].id;
     console.log("ID",id)

     //get sallarydata
     this.empSingleSal=this.empProfileService.getSingleEmpSalaryData(id);
     console.log("emp salary data",this.empSingleSal);
     let epf=this.empSingleSal[0].employeeEpf
     let esi=this.empSingleSal[0].employeeESI
     
     this.totalEmpFund=parseFloat(epf)+parseFloat(esi);
      //get payment info
      this.empPaymentInfo=this.empProfileService.getSingleEmpPaymentInfo(id);
      console.log("emp empPaymentInfo data",this.empPaymentInfo)

      //get payment info
      this.empPayroll=this.empProfileService.getSingleEmpPayroll(id);
      console.log("emp empPaymentInfo data",this.empPayroll)
         
      this.dateOfRemrak();
     
  }
  photo="./assets/images/connectix.jpeg";


title = 'html-to-pdf-angular-application';
public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('ConnectixPaySlip.pdf'); // Generated PDF
});
}

// date;
dateOfRemrak(){
  let p=new Date();
  let mon= p.toLocaleString('default', { month: 'long'})
  console.log(mon)
 
  // let mom= mon.toLocaleString('default', { month: 'long'})
   let years=this.datePipe.transform(p, 'yyyy');
   console.log(years);

   this.date='Pay Slip For the Month of '.concat(mon,"-",years);
   console.log(this.date)
}

}

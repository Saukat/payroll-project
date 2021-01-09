import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { PayrollDetailsService } from 'src/app/appService/payroll-details.service';
import { PayrollDetailsComponent } from '../payroll-details/payroll-details.component';

@Component({
  selector: 'app-payroll-all-details',
  templateUrl: './payroll-all-details.component.html',
  styleUrls: ['./payroll-all-details.component.css']
})
export class PayrollAllDetailsComponent implements OnInit {
  allDataOfPayroll;
  
  constructor(private payrollService:PayrollDetailsService,private datePipe:DatePipe) { }


  dataforTxtfile:any=[];
  fhrData;
  mdrData;
  str:any=[];
  
  date;
  totalcost:any=0;
  ngOnInit() {
    
    
    // {"MDR":"MDR", "accNo":"006105027372", "p":"570518395","INR":"INR", "ifsc":"ICIC0000011","web":"WEB^"}
    // this.fhrData=this.payrollService.getDataPrintForFHR();
    // this.mdrData=this.payrollService.getDataPrintForMDR();
    console.log("data",this.mdrData)
    
     this.allDataOfPayroll= this.payrollService.getDataForPrint();
      // console.log("Data of acc",this.allDataOfPayroll.accNo);
      this.allDataOfPayroll.map((ele,ind,arr)=>{
          this.dataforTxtfile[ind]='MCW|'.concat(ele.accNo.concat('|','0011','|',ele.name,'|',
                                    ele.netSalary,'|','INR','|',ele.remark,
                                    '|','ICICI00001','|','WEB^'));
          // [...this.dataforTxtfile]=ele[0].name;
          // this.allDataOfPayroll[ind].replace(',',"<br />");
          console.log("data of acc",this.dataforTxtfile);
          return this.dataforTxtfile;
      })
      
      for (var i = 0; i < this.dataforTxtfile.length; i++) {
        this.str+=this.dataforTxtfile[i]+'\n';
      }
      this.str=this.str.split('undefined')

      // alert(this.str);
      // console.log("data",this.dataforTxtfile)
      this.calculateTotalCompanyCost();
      this.dateOfRemrak()
      this.fhrData='FHR|15/08/03/2020|Cut-off|'.concat(this.totalcost+'|INR|0061052027372|0011^')

      this.mdrData='MDR|006105027372|0011|570518395|'.concat(this.totalcost+'|INR|',this.date,'|ICICI0000011|WEB^')
    
      
  }

    


  fakeValidateUserData() {
    console.log("dataaa=>",this.str)
    return of({
      a:this.fhrData,
      b:this.mdrData,
      c:this.str
    });
  }

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  dynamicDownloadTxt() {
    this.fakeValidateUserData()
    .subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report',
        fhr:res.a,
        mdr:res.b,
        emp:res.c
        
        
      });
    });

  }
  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    fhr: string,
    mdr:string,
    emp:string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.fhr)}\n${encodeURIComponent(arg.mdr)}\n${encodeURIComponent(arg.emp)}`);
    element.setAttribute('download', arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }

  calculateTotalCompanyCost(){
       console.log(this.allDataOfPayroll);
       let p=this.allDataOfPayroll.map(ele=>{
           this.totalcost +=parseFloat(ele.netSalary);

           return this.totalcost;

       });
       console.log("Total Cost:",this.totalcost)
     
  }

  // date;
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

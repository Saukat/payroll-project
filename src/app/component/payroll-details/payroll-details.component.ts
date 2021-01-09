
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { PayrollDetailsService } from 'src/app/appService/payroll-details.service';


@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent implements OnInit {
  payrollAllData:any=[]
  
  constructor(private payrollService:PayrollDetailsService,private router:Router) { }
  displayedColumns: string[] = ['name', 'monthlyCtc', 'Additions','deduction','reimbursements','remarks', 'grossPay','status', 'edit'];
                                  
  dataSource=new MatTableDataSource(this.payrollAllData)


  //paginator
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  // //Sorting
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  ngOnInit() {
  //  let tsts=this.payrollService.savePayrollDetails();
   
    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;

        this.payrollAllData=this.payrollService.getAllPayrollDetails();
        console.log("Payroll data=...",this.payrollAllData);
        
        // this.payrollAllData[ipId]['name'] = value;
        // this.payrollAllData.map(s=>{
        //      s['addition']="N/A";
        //      s['deduction']="N/A";
        //      s['reimbursements']="N/A";
        //      s['remark']="Salary process for this month";

        //      return s;
        // })
        // // save data of payroll
        // console.log("Updatesss=>",this.payrollAllData);
        // this.payrollService.savePayrollDetails(this.payrollAllData);

        this.dataSource.data=this.payrollAllData;
         console.log("data",this.dataSource.data);
  }

   //filter data
   applyFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
   }
    
  //edit
  editPayrollDetails(element:any){
    console.log("edit=>",element)
     this.payrollService.getPayrollAllData=element;
    //this.payrollService.editPayrollDetails(element);
    this.router.navigate(['dashboard','editPayroll'])
  }
   


}

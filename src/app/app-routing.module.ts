import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AllEmployeesListComponent } from './component/all-employees-list/all-employees-list.component';
import { DashboardBodyInfoComponent } from './component/dashboard-body-info/dashboard-body-info.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { EditFiscalYearComponent } from './component/edit-fiscal-year/edit-fiscal-year.component';
import { EditOtherInformationComponent } from './component/edit-other-information/edit-other-information.component';
import { EditPaymentInfoComponent } from './component/edit-payment-info/edit-payment-info.component';
import { EditPayrollDetailsComponent } from './component/edit-payroll-details/edit-payroll-details.component';
import { EditProvidentFundComponent } from './component/edit-provident-fund/edit-provident-fund.component';
import { EditSalaryStructureComponent } from './component/edit-salary-structure/edit-salary-structure.component';

import { EmployeeRegisterComponent } from './component/employee-register/employee-register.component';
import { FiscalYearComponent } from './component/fiscal-year/fiscal-year.component';
import { OtherInformationComponent } from './component/other-information/other-information.component';
import { PaymentInfoComponent } from './component/payment-info/payment-info.component';
import { PayrollAllDetailsComponent } from './component/payroll-all-details/payroll-all-details.component';
import { PayrollDetailsComponent } from './component/payroll-details/payroll-details.component';
import { ProvidentFundComponent } from './component/provident-fund/provident-fund.component';
import { SalaryStructureComponent } from './component/salary-structure/salary-structure.component';
import { SingleEmpDetailsComponent } from './component/single-emp-details/single-emp-details.component';
import { EmployeeDashboardComponent } from './employeeComponent/employee-dashboard/employee-dashboard.component';
import { EmployeePayslipComponent } from './employeeComponent/employee-payslip/employee-payslip.component';
import { EmployeeProfileComponent } from './employeeComponent/employee-profile/employee-profile.component';


const routes: Routes = [
  // {path:'',redirectTo:'adminLogin',pathMatch:'full'},
  // {path:'adminLogin',component:AdminLoginComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'employee-register',component:EmployeeRegisterComponent},
  // {path:'one/:id',component:SingleEmpDetailsComponent},
  // {path:'update',component:EditEmployeeComponent},


  {path:'',redirectTo:'adminLogin',pathMatch:'full'},
  {path:'adminLogin', component:  AdminLoginComponent},

  {path:'empDashboard',component:EmployeeDashboardComponent,
     children:[
      // {path:'',redirectTo:'empProfie',pathMatch:'full'},
      {path:'empProfil',component:EmployeeProfileComponent},

      {path:'empProfile/:email',component:EmployeeProfileComponent},
      {path:'empPaySlip',component:EmployeePayslipComponent},
     ]
  },
 

  {path:'dashboard',component: DashboardComponent,
     children:[
      { path:'',component:DashboardBodyInfoComponent},
      { path:'employee-register',component:EmployeeRegisterComponent},
      {path:'allEmp',component:AllEmployeesListComponent},
     

      {path:'one/:id',component:SingleEmpDetailsComponent},
      {path:'update',component:EditEmployeeComponent},

      {path:'otherInfo/:id',component:OtherInformationComponent},
      {path:'editOtherInfo',component:EditOtherInformationComponent},

      {path:'providentFund/:id',component:ProvidentFundComponent},
      {path:'EditprovidentFund',component:EditProvidentFundComponent},

      {path:'paymentInfo/:id',component:PaymentInfoComponent},
      {path:'editPaymentInfo',component:EditPaymentInfoComponent},

      {path:'fiscalYear/:id',component:FiscalYearComponent},
      {path:'editFiscalYear',component:EditFiscalYearComponent},

      {path:'salaryStructure/:id',component:SalaryStructureComponent},
      {path:'editsalaryStructure',component:EditSalaryStructureComponent},

      {path:'payroll',component:PayrollDetailsComponent},
      {path:'editPayroll',component:EditPayrollDetailsComponent},
 
      {path:'payrollAll',component:PayrollAllDetailsComponent}


      

     ]
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRegisterComponent } from './component/employee-register/employee-register.component';
import { AllEmployeesListComponent } from './component/all-employees-list/all-employees-list.component';
import { SingleEmpDetailsComponent } from './component/single-emp-details/single-emp-details.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavComponent } from './component/left-nav/left-nav.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardBodyInfoComponent } from './component/dashboard-body-info/dashboard-body-info.component';


import { OtherInformationComponent } from './component/other-information/other-information.component';
import { EditOtherInformationComponent } from './component/edit-other-information/edit-other-information.component';
import { ProvidentFundComponent } from './component/provident-fund/provident-fund.component';
import { EditProvidentFundComponent } from './component/edit-provident-fund/edit-provident-fund.component';
import { PaymentInfoComponent } from './component/payment-info/payment-info.component';
import { EditPaymentInfoComponent } from './component/edit-payment-info/edit-payment-info.component';
import { FiscalYearComponent } from './component/fiscal-year/fiscal-year.component';
import { EditFiscalYearComponent } from './component/edit-fiscal-year/edit-fiscal-year.component';
import { SalaryStructureComponent } from './component/salary-structure/salary-structure.component';
import { EditSalaryStructureComponent } from './component/edit-salary-structure/edit-salary-structure.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PayrollDetailsComponent } from './component/payroll-details/payroll-details.component';
import { EditPayrollDetailsComponent } from './component/edit-payroll-details/edit-payroll-details.component';
import { DatePipe } from '@angular/common';
import { PayrollAllDetailsComponent } from './component/payroll-all-details/payroll-all-details.component';
import { EmployeeDashboardComponent } from './employeeComponent/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './employeeComponent/employee-profile/employee-profile.component';
import { EmployeePayslipComponent } from './employeeComponent/employee-payslip/employee-payslip.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    DashboardComponent,
    EmployeeRegisterComponent,
    AllEmployeesListComponent,
    SingleEmpDetailsComponent,
    EditEmployeeComponent,
    LeftNavComponent,
    HeaderComponent,
    DashboardBodyInfoComponent,
  
  
    OtherInformationComponent,
    EditOtherInformationComponent,
    ProvidentFundComponent,
    EditProvidentFundComponent,
    PaymentInfoComponent,
    EditPaymentInfoComponent,
    FiscalYearComponent,
    EditFiscalYearComponent,
    SalaryStructureComponent,
    EditSalaryStructureComponent,
    PayrollDetailsComponent,
    EditPayrollDetailsComponent,
    PayrollAllDetailsComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    EmployeePayslipComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

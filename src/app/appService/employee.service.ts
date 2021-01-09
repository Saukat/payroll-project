import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  editData;
  oneRecords;
  ApiURL={}
  //singleObj;
  constructor(private location:Location,private router:Router) { }


   //Add to local Storage
    ids=1;
    id=1;
   addEmployee(employee:Employee){
     console.log("register Data:",employee)
    let employees=[]
    if(localStorage.getItem('EmployeesRegisterData')){
       employees=JSON.parse(localStorage.getItem('EmployeesRegisterData'))
     // debugger;
       console.log("employees",employees)

      this.id=employees.length;
      this.id++;
      // console.log("id",this.id);
      
      //Asign id key and value into employee object
      employee["id"]=this.id;
   
                 
       employees=[employee, ...employees];
    }else{
      employee["id"]=this.id;
      employees=[employee];
    }
    localStorage.setItem('EmployeesRegisterData',JSON.stringify(employees))
   this.router.navigate(['dashboard','allEmp']);
  //  this.location.back();
  

    // let employees=[]
    // let ids=1;
    // let id=0;
    // if(localStorage.getItem('EmployeesDetails')){
       
    //      employees=JSON.parse(localStorage.getItem('EmployeesDetails'))
    //        for(let i=0;i<employees.length;i++){
    //            id=employees[i].id;
    //              ids=ids+id;
    //              console.log("id",ids);

                 
    //           // console.log("id",employees[i].id);   
    //        }
    //        let idObject={"id":ids};
    //              employees.push(idObject);
                 
    //              employees[id]['employeeInfo']=employee;

    //              console.log(employees)
          

         
    //    //  employees=[employee, ...employees];
    //      console.log("present::",employees)
    //   }else{
    //     let idObject={"id":ids};
    //     employees.push(idObject);
    //    // employees=[employee];
    //    employees[id]['employeeInfo']=employee;

    //    console.log(employees)

    //   }
    //     localStorage.setItem('EmployeesDetails',JSON.stringify(employees))
}






//getSingle Employee details <:Observable<Employee>>
 oneData;
 empSingledata;
getOneEmpDetails(id:any){
  console.log("service Id:"+id);
 let allEmp=JSON.parse(localStorage.getItem('EmployeesRegisterData'));
 console.log("All Data:",allEmp);






    let singleEmp=allEmp.filter((data,index)=>{
       return data.id==id
    })
    console.log("PPP",singleEmp)

    return singleEmp;
   // console.log("dt",allEmp[0].employeeInfo)

    // let oneRecords= allEmp.map((data)=>data.id===id);
          
    
     
    //  console.log("data",oneRecords);
    //  this.empSingledata=oneRecords
    //  return oneRecords;

    // for(let i=0;i<allEmp.length;i++){
    //    //  console.log("loop",allEmp[i].employeeInfo.employeeId===id)
    //      if(allEmp[i].id===id){
    //      this.oneData=allEmp[i]
    //     }
    // }
    // console.log("one Data",this.oneData)
    // return this.oneData
 
 }



}

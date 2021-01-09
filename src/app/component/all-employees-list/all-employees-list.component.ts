import { DataSource } from '@angular/cdk/table';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/appService/employee.service';
import { Employee } from 'src/app/models/employee';










@Component({
  selector: 'app-all-employees-list',
  templateUrl: './all-employees-list.component.html',
  styleUrls: ['./all-employees-list.component.css']
})
export class AllEmployeesListComponent implements OnInit {


 

  allEmployeeData:any=[];
                          
 


 
 
  constructor(private router:Router,private empService:EmployeeService){}

  displayedColumns: string[] = ['sno', 'title', 'name','email','hireDate','jobTitle', 'location', 'department', 'rollType', 'gender','operation'];
                                  
  dataSource=new MatTableDataSource(this.allEmployeeData)

  //paginator
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  //Sorting
  @ViewChild(MatSort,{static:true}) sort: MatSort;
                              
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
    this.dataSource.sort = this.sort;


   this.allEmployeeData=JSON.parse(localStorage.getItem('EmployeesRegisterData'));
   this.dataSource.data=this.allEmployeeData;
   console.log("All Data",this.allEmployeeData) //getting data

     console.log("data",this.dataSource.data);
  }
  
  
  onEmpDetails(id){
     this.empService.getOneEmpDetails(id);
     this.router.navigate(['dashboard','one',id]);
    //this.router.navigate(['one',id])
  //   console.log("",id);

  }

  //filter data
  applyFilter(filterValue:string){
         this.dataSource.filter=filterValue.trim().toLowerCase();
        
  }

}

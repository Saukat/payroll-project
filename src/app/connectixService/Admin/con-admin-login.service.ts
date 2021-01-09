import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AdminLogin } from 'src/app/models/admin-login';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ConAdminLoginService {
  adminLoginUrl="http://localhost:5858/connectix/admin/login";
  constructor(private http:HttpClient) { }

  adminCredential(adminLogin:AdminLogin){
        return this.http.post(this.adminLoginUrl,adminLogin);
                           
  }
 
  
}

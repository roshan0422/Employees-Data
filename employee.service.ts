import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = 'http://localhost:8090/api/v1/employees';

  constructor(private httpClient: HttpClient) {}


  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }


  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.get<Employee>(url);
  }


  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post<Employee>(this.baseURL, employee);
  }


  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.put<Employee>(url, employee);

  }
  deleteEmployee(id: number): Observable<void> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
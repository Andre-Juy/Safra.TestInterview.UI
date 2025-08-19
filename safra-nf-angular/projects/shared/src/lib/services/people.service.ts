import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '@mf-workspace/shared';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'http://localhost:5149/api/People';

  constructor(private client: HttpClient) {}


  getList() {
    
    return this.client.get<People[]>(this.apiUrl + '/All');

  }

  post(people : People): Observable<any>{
    return this.client.post<People>(this.apiUrl, people);
  }

  delete(id: string): Observable<any>{
    return this.client.delete<any>(this.apiUrl + '?id=' + id);
  }
}
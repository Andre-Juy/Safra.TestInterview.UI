import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '@mf-workspace/shared';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = environment.apiUrl + 'People';

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

  getFind(id: string | null): Observable<any>{
    return this.client.get<any>(this.apiUrl + '?id=' + id);
  }

  put(people: People): Observable<any>{
    return this.client.put<any>(this.apiUrl, people);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { People } from '@mf-workspace/shared';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private apiUrl = 'http://localhost:5149/api/People/All';

  constructor(private client: HttpClient) {}


  getList() {
    
    return this.client.get<People[]>(this.apiUrl);

  }
}
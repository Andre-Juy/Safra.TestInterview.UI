import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {

  /**
   *
   */
  constructor(tesste: HttpClient) {

    
  }

  log(message: string) {
    console.log(`[Logger]: ${message}`);
  }

  log2(){
    console.log('Agora foi!')
  }
}
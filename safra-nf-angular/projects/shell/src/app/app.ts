import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PrimeNG } from 'primeng/config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell-root',
  imports: [
    RouterOutlet, 
    MatToolbarModule,
    MatMenuModule,
   MatIconModule,
  MatSidenavModule,
CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shell');
  usuarioLogado = false;
  constructor(private router: Router, private primeng: PrimeNG) {
    
  }

  ngOnInit() {
        this.primeng.ripple.set(true);
    }

  public openSchedules(){

  }

  openPeople(){

    this.router.navigate(['/people'])
  }
}

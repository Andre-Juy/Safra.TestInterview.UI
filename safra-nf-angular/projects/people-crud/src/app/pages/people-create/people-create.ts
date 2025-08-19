import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { BaseFormComponent, ModalDialogService, People, PeopleService } from '@mf-workspace/shared';
import { Router } from '@angular/router';


@Component({
  selector: 'app-people-crud-people-create',
  imports: [ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './people-create.html',
  styleUrl: './people-create.scss'
})
export class PeopleCreate extends BaseFormComponent implements OnInit, OnDestroy {

    private sub!: Subscription;


  constructor(
    private _fb: FormBuilder,
    private _servicePeople: PeopleService,
    private router: Router,
    private _modalDialogService: ModalDialogService
  ) 
  { super(); }

  ngOnInit(): void {
    this._initForm();
  }

    private _initForm(){

    this.formulario = this._fb.group({

     name: ['', Validators.required],
     lastName: ['', Validators.required],
     email: ['', Validators.required]

    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  submit(): void {
    
    var people: People = this.formulario.getRawValue() as People;
    this.sub = this._servicePeople.post(people)
    .subscribe((res) => {
      
      this.sub = this._modalDialogService.openMessage('Sucesso', 'Pessoa cadastrada com sucesso!')
      .subscribe((res) => {

        this.router.navigate(['/people']);


      })
       
    })
    


  }
  
}

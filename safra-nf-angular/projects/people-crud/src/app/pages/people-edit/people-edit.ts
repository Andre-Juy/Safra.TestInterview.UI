import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent, ModalDialogService, People, PeopleService } from '@mf-workspace/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-crud-people-edit',
  imports: [ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './people-edit.html',
  styleUrl: './people-edit.scss'
})
export class PeopleEdit extends BaseFormComponent implements OnInit, OnDestroy {

  private _sub!: Subscription;
  private _userId: string | null = '';

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _servicePeople: PeopleService,
    private router: Router,
    private _modalDialogService: ModalDialogService) { super(); }

  ngOnInit() {

    this._userId = this._route.snapshot.paramMap.get('id');
    this._preencherForm(this._userId);

  }

  private _preencherForm(id: string | null) {

    this.formulario = this._fb.group({

      id: [''],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]

    })

    this._sub =
      this._servicePeople.getFind(id)
        .subscribe((res) => {

          this.formulario.patchValue(res);

        });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  submit(): void {

    var people: People = this.formulario.getRawValue() as People;

    this._sub = this._servicePeople.put(people)
      .subscribe((res) => {

        this._modalDialogService.openMessage('Sucesso', 'Pessoa editada com sucesso!')
          .subscribe((res) => {

            this.router.navigate(['/people']);
            
          })

      })

  }

}

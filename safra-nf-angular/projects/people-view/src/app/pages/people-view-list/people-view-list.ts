import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { Subscription } from 'rxjs';

import { People, PeopleService, ModalDialogService } from '@mf-workspace/shared';


@Component({
  selector: 'app-people-view-people-view-list',
  imports: [TableModule, CommonModule, MatIconModule,],
  templateUrl: './people-view-list.html',
  styleUrl: './people-view-list.scss'
})
export class PeopleViewListComponent implements OnInit, OnDestroy {

  private sub!: Subscription;

  peoples!: People[];

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private _modalDialogService: ModalDialogService) { }

  ngOnInit() {

    this.sub = this.peopleService.getList().subscribe((res: People[]) => {

      // this.load = false;
      this.peoples = res

    });
  }

  openCreatePeople() {

    this.router.navigate(['/people/create']);
  }

  deletePeople(id: string) {

    this.sub = this._modalDialogService.open('Deletar', 'Tem certeza de deseja deletar o registro?')
      .subscribe((res) => {

        if (res) {
          console.log(res);
          this.sub =
            this.peopleService.delete(id)
              .subscribe((res) => {

                this.sub = this.peopleService.getList().subscribe((res: People[]) => {

                  // this.load = false;
                  this.peoples = res

                });

              });

        }

      })

  }

  editPeople(id: string) {
    this.router.navigate(['people/edit', id]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

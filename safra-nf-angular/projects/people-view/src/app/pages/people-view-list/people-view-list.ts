import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService, People, PeopleService } from '@mf-workspace/shared';
import { TableModule } from 'primeng/table';
import { Subject, Subscription } from 'rxjs';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-people-view-people-view-list',
  imports: [TableModule, CommonModule],
  templateUrl: './people-view-list.html',
  styleUrl: './people-view-list.scss'
})
export class PeopleViewListComponent implements OnInit, OnDestroy {
  
  private sub!: Subscription;
  
  peoples!: People[];
  cols!: Column[];

  constructor(
    private peopleService: PeopleService,
    private router: Router) {
   
    this.peopleService.getList().subscribe((res) => { console.log(res) });
    
  }

  ngOnInit() {
        
    this.sub = this.peopleService.getList().subscribe((res: People[]) => {

          this.peoples = res

        });


    this.cols = [
            { field: 'id', header: 'id' },
            { field: 'name', header: 'Nome' },
            { field: 'lastName', header: 'Sobrenome' },
            { field: 'email', header: 'Email' }
        ];
      
  }

  openCreatePeople(){

    this.router.navigate(['/people/create']);
  }

  deletePeople(id: string){
    
    console.log('id', id);
    this.sub = 
    this.peopleService.delete(id)
    .subscribe((res) => {
      console.log('deletado');
    });
  }

  editPeople(id: string){
    this.router.navigate(['people/edit', id]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

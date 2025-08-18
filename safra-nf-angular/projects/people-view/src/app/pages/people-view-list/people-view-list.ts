import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService, People, PeopleService } from '@mf-workspace/shared';
import { TableModule } from 'primeng/table';

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
export class PeopleViewListComponent {
  
  peoples!: People[];
  cols!: Column[];

  constructor(
    private serv: LoggerService, 
    private peopleService: PeopleService,
    private router: Router) {
   
    this.peopleService.getList().subscribe((res) => { console.log(res) });
    
  }

  ngOnInit() {
        
    this.peopleService.getList().subscribe((res: People[]) => {

          this.peoples = res

        });


    this.cols = [
            { field: 'Id', header: 'Id' },
            { field: 'name', header: 'Name' },
            { field: 'lastName', header: 'LastName' },
            { field: 'email', header: 'Email' }
        ];
      
  }

  openCreatePeople(){

    this.router.navigate(['/people/create']);
  }
}

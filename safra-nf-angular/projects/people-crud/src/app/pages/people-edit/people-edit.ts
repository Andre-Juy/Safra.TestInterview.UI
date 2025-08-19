import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-crud-people-edit',
  imports: [],
  templateUrl: './people-edit.html',
  styleUrl: './people-edit.scss'
})
export class PeopleEdit implements OnInit {

userId: string | null = '';

constructor(private route: ActivatedRoute) {}

ngOnInit() {
    // Access route parameter
    this.userId = this.route.snapshot.paramMap.get('id');

    console.log(this.userId)
  }

}

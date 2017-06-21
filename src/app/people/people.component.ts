import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PersonService]
})
export class PeopleComponent implements OnInit {
  people: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() {
    this.people = this.personService.getPeople();
  }

  goToDetailPerson(clickedPerson) {
    this.router.navigate(['person', clickedPerson.$key]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css'],
  providers: [PersonService]
})
export class PersonDetailComponent implements OnInit {

  personId: string;
  personToDisplay;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.personId = (urlParameters['id']);
    });
    this.personToDisplay = this.personService.getPersonById(this.personId);
  }

  deleteProject(){
    this.router.navigate(['person-edit', this.personId]);
  }
}

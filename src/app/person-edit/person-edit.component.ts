import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  providers: [PersonService]
})
export class PersonEditComponent implements OnInit {
  @Input() selectedPerson;
  // personId: string;
  personToDelete;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService
  ) { }

  ngOnInit() {
  }

  beginUpdatingPerson(personToUpdate){
  this.personService.updatePerson(personToUpdate);
}

beginDeletingPerson(){
  if(confirm("Are you sure you want to delete this person profile?")){
    this.personService.deletePerson(this.selectedPerson.$key);
  }
}

}

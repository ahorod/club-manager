import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  submitForm(newName: string,newImageUrl:string, newDescription: string,newCategory: string,newSpecialty: string) {
    var newPerson: Person = new Person(newName, newImageUrl,newDescription, newCategory, newSpecialty);
    this.personService.addPerson(newPerson);
  }
}

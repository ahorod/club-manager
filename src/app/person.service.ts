import { Injectable } from '@angular/core';
import { Person} from './person.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PersonService {
  people: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.people = database.list('people');
  }

  addPerson(newPerson: Person){
    this.people.push(newPerson);
  }
}

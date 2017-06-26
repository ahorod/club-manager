import { Injectable } from '@angular/core';
import { Person} from './person.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PersonService {
  people: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.people = database.list('people');
  }


  getPeople() {
    return this.people;
  }

  getPersonById(personId: string) {
    return this.database.object('people/' + personId);
  }

  addPerson(newPerson: Person){
    this.people.push(newPerson);
  }

  deletePerson(localPersonToDelete){
    var personEntryInFirebase = this.getPersonById(localPersonToDelete);
    personEntryInFirebase.remove();
  }

  updatePerson(localUpdatedPerson){
    var personEntryInFirebase = this.getPersonById(localUpdatedPerson.$key);
    personEntryInFirebase.update({personName: localUpdatedPerson.name,
                                imageUrl: localUpdatedPerson.imageUrl,
                                description: localUpdatedPerson.description,
                                category: localUpdatedPerson.category,
                                specialty: localUpdatedPerson.specialty});
  }
}

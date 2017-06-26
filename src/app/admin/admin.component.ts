import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PersonService]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'person-add',
    component: PersonAddComponent
  },
  {
    path:'',
    component: PeopleComponent
  },
  {
    path:'person/:id',
    component: PersonDetailComponent
  },
  {
    path: 'person-edit/:id',
    component: PersonEditComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

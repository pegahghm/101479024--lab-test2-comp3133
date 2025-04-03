import { Routes } from '@angular/router';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';
import { CharacterFilterComponent } from './characterfilter/characterfilter.component';

const routes: Routes = [
    { path: '', redirectTo: 'characters', pathMatch: 'full' },  
    { path: 'characters', component: CharacterListComponent }, 
    {
      path: 'character/:id',
      component: CharacterDetailsComponent,
      data: { renderMode: 'server' }, 
    },
    { path: 'filter', component: CharacterFilterComponent },
];

export default routes;
export { routes };
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { formCharComponent } from './character/form-character/form-character.component';
import { listCharacterComponent } from './character/list-character/list-character.component';
import { ContentComponent } from './home/content/content.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},


{
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: ContentComponent,
    },
    {
      path: 'app-character',
      component: formCharComponent,
    },

    {
      path: 'list-character',
      component: listCharacterComponent,
    },
  

 

    
  
    
    

    
  ]
}

  
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { useHash: true } ) 
],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
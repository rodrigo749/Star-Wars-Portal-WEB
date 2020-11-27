  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './home/content/content.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    //     canActivate: [LoginGuard]
    // },
    {
        path: 'home',
        component: HomeComponent,
        children: [{
            path: '',
            pathMatch: 'full',
            redirectTo: 'content',
        },
        {
            path: '',
            component: ContentComponent,
        },
        {
            path: 'content',
            component: ContentComponent,
        },

        
        ]
    },
    { path: '**', redirectTo: 'home' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
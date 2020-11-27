import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ContentComponent } from './content.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
       ContentComponent
    ],
    exports: [

    ]
})
export class ContentModule {

}
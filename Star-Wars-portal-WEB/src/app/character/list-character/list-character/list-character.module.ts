import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { listCharacterComponent } from '../list-character.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        listCharacterComponent
    ],
    exports: [
        
    ]
})
export class ListCharacterModule{

}
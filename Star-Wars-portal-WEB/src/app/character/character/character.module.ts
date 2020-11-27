import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { formCharComponent } from '../form-character/form-character.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        formCharComponent
    ],
    exports: [
        
    ]
})
export class CharacterModule{

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContentModule } from './content/content.module';
import { FooterComponent } from './footer/footer.component';
import { CharacterModule } from '../character/character/character.module';
import { formCharComponent } from '../character/form-character/form-character.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
       
    ],
    imports: [
        CommonModule,
        ContentModule,
        RouterModule,
        CharacterModule
       

    ],
    exports: [
        HeaderComponent,
    ]
})
export class HomeModule {

}
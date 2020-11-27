import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { CharacterService } from '../character/character.service';
import { Character } from '../character/character';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-character',
  templateUrl: './form-character.component.html',
})
export class formCharComponent implements OnInit{
  
  charForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private characterService:CharacterService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router

    
    ){}
  ngOnInit(): void {

     this.route.params
     .pipe(
       map((params: any) => params['id']),
       switchMap(id => this.characterService.getByIdChar(id))
     )
     .subscribe(char => this.editForm(char)
     );


    this.charForm = this.formBuilder.group({
      id:[null],
      name_char:['',Validators.required],
      age:['',Validators.required]
    
    });
  }
  
 submit(){

   if(this.charForm.value.id){
    const newChar = this.charForm.getRawValue() as Character;
    this.characterService.updateChar(newChar).subscribe(
      success =>{
        alert('Edited successfully')
        this.location.back();
      },
      error =>{
        console.log(error)
      }
      )
    }else {
      const newChar = this.charForm.getRawValue() as Character;
      this.characterService.saveChar(newChar).subscribe(
        success =>{
          alert('Registered successfully')
          this.location.back();
        },
        error =>{
          console.log(error)
        }
        )
   }
 }

 editForm(character: Character) {


  this.charForm.patchValue(
    {
      id: character[0].id,
      name_char: character[0].name_char,
      age: character[0].age,
  
    }
  )
}

 
  
}
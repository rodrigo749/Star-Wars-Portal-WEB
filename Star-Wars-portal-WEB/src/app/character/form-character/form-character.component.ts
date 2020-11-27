import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { CharacterService } from '../character/character.service';
import { Character } from '../character/character';


@Component({
  selector: 'app-character',
  templateUrl: './form-character.component.html',
})
export class formCharComponent implements OnInit{
  
  charForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private characterService:CharacterService,
    private location: Location
    
    ){}
  ngOnInit(): void {
    this.charForm = this.formBuilder.group({
      id:[null],
      name_character:['',Validators.required],
      age:['',Validators.required]
    
    });
  }
  
 submit(){
   if(this.charForm.valid){
    const novoSetor = this.charForm.getRawValue() as Character;
    this.characterService.saveSetor(novoSetor).subscribe(
      success =>{
        this.location.back();
      },
      error =>{
        console.log(error)
      }
    )
   }
 }
  
}
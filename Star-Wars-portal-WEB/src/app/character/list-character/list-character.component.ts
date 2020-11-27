import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { List_Character } from './list-character/list-character';
import { ListCharacterService } from './list-character/list-character.service';

@Component({
  selector: 'list-character',
  templateUrl: './list-character.component.html',
})
export class listCharacterComponent implements OnInit {
   listCharacter: List_Character[] = [];
   relatorioForm:FormGroup;
//    listaEquipamento: Lista_Equipamentos;
  

constructor(
  private listCharacterService: ListCharacterService,
  private formBuilder: FormBuilder,
  private router: Router,
  private _router:Router,
  private route: ActivatedRoute
 
  ){}

  ngOnInit() {
    
    this.relatorioForm = this.formBuilder.group({
      pesquisa:[''],
      pesquisarTodos:['']

    })
  }


  pesquisaTodos(){
    this.listCharacterService.getAll().subscribe(result => {this.listCharacter = result; console.log(result)})
  }


}
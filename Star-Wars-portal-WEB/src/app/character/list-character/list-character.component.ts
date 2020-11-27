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
   charForm:FormGroup;
  

constructor(
  private listCharacterService: ListCharacterService,
  private formBuilder: FormBuilder,
  private router: Router,
  private _router:Router,
  private route: ActivatedRoute
 
  ){}

  ngOnInit() {

    
    this.findAll();//Initialisation
    setInterval(() => this.findAll(), 15000);
    
    this.charForm = this.formBuilder.group({
      pesquisa:[''],

    })
  }

  findAll(){
    this.listCharacterService.getAll().subscribe(result => {this.listCharacter = result;})
  }

  deleteCharacter(id) {
    this.listCharacterService. deleteCharacter(id).subscribe(result => { this.listCharacter = result; })
    console.log(id)
    alert('Mensagem excluida com sucesso')
    this.router.navigate(['/home/list-character']);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Character } from './character';



const API = environment.apiUrl; 

@Injectable({
    providedIn: 'root'
  })

  
  
export class CharacterService {
    constructor(private http:HttpClient){}
  
    getSetores(){
        return this.http.get<Character[]>(`${API}/setores`).pipe(take(1));
    }

    saveSetor(setor : Character){
      return this.http.post(`${API}/setores`,setor).pipe(take(1));
  }
  }
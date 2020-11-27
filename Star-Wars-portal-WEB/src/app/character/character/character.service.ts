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
  
    getChar(){
        return this.http.get<Character[]>(`${API}/character`).pipe(take(1));
    }

    saveChar(char : Character){
      return this.http.post(`${API}/character`,char).pipe(take(1));
  }
  }
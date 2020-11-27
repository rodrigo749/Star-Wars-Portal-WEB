import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List_Character } from './list-character';


const API = environment.apiUrl; 


@Injectable({
  providedIn: 'root'
})


export class ListCharacterService {
  constructor(private http:HttpClient){}

      getAll(): Observable<List_Character[]>{
        return this.http.get<List_Character[]>(`${API}/character`);
      }

      deleteCharacter(id) {
        return this.http.delete<List_Character[]>(`${API}/character/${id}`);
      }
    

  }
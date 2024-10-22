import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://frasesapi.vercel.app/v1/frases/aleatoria/?categoria=salud';

  constructor(private http: HttpClient) { }

  getHealthTip(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

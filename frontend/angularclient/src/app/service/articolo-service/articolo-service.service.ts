import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articolo } from 'src/app/model/articolo/articolo';

@Injectable()
export class ArticoloService {

  private articoloUrl: string;

  constructor(private http: HttpClient) { 
    this.articoloUrl = "http://localhost:8080/articoli";
  }

  public findall(): Observable<Articolo[]> {
    return this.http.get<Articolo[]>(this.articoloUrl);
  }

  public save(articolo: Articolo){
    return this.http.post<Articolo>(this.articoloUrl, articolo);
  }

}

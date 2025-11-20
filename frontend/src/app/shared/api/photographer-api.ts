import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePhotographerInput } from './models/create-photographer-input';
import { CreatePhotographerOutput } from './models/create-photographer-output';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotographerApi {
  private baseUrl = 'http://localhost:3000/api/photographers';

  constructor(private http: HttpClient) {}

  create(input: CreatePhotographerInput): Observable<CreatePhotographerOutput> {
    return this.http.post<CreatePhotographerOutput>(this.baseUrl, input);
  }
}

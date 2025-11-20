import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePhotographerInput } from './models/create-photographer-input';
import { CreatePhotographerOutput } from './models/create-photographer-output';
import { Observable } from 'rxjs';
import { UpdatePhotographerInput } from './models/update-photographer-input';
import { UpdatePhotographerOutput } from './models/update-photographer-output';
import { ListPhotographerOutput } from './models/list-photographer-output';

@Injectable({
  providedIn: 'root',
})
export class PhotographerApi {
  private baseUrl = 'http://localhost:3000/api/photographers';

  constructor(private http: HttpClient) {}

  create(input: CreatePhotographerInput): Observable<CreatePhotographerOutput> {
    return this.http.post<CreatePhotographerOutput>(this.baseUrl, input);
  }

  update(id: number, input: UpdatePhotographerInput): Observable<UpdatePhotographerOutput> {
    return this.http.put<UpdatePhotographerOutput>(`${this.baseUrl}/${id}`, input);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  list(): Observable<ListPhotographerOutput[]> {
    return this.http.get<ListPhotographerOutput[]>(this.baseUrl);
  }
}

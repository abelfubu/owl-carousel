import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

interface Alumno {
  nombre: string;
  edad: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('http://localhost:3000').pipe(
      pluck('result')
      // map((response: Alumno[]) =>
      //   response.map<Alumno>((alumno) => new Alumno())
      // )
    );
  }
}

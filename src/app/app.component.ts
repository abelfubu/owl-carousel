import { Component, OnInit } from '@angular/core';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private alumnosService: AlumnosService) {}
  alumnos: any[];
  ngOnInit(): void {
    this.alumnosService
      .getAll()
      .subscribe((respuesta) => (this.alumnos = respuesta));
  }
}

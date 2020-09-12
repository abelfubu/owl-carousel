import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'fb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() inputType: string;

  constructor() {}

  get input(): ValidationErrors {
    return this.control.errors;
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss'],
})
export class ColorFormComponent implements OnInit {
  value = 'goldenrod';

  colorForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.colorForm = new FormGroup({
      color: new FormControl(this.value, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });

    this.colorForm.valueChanges.pipe(tap((s) => console.log(s))).subscribe();
  }

  /**
   *
   * @param v
   */
  updateColor(v: unknown): void {
    console.log(v);
  }
}

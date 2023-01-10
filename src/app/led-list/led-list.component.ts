import { Component, OnInit } from '@angular/core';
import {Led} from "../model/led";

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit {

  leds: Led[] = [
    {
      index: 0,
      color: 'red'
    },
    {
      index: 1,
      color: 'green'
    },
    {
      index: 2,
      color: 'yellow'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

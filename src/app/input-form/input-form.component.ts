import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {QuoteC} from '../quote-c';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  newQuote = new QuoteC(0, '', '', '');

  @Output() addQuote = new EventEmitter<QuoteC>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}

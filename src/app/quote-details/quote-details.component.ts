import { Component, OnInit, Output , EventEmitter , Input } from '@angular/core';
import {QuoteC} from '../quote-c';
import { from } from 'rxjs';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
 @Input() quote: QuoteC;
 @Output() done = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
  this.done.emit(complete);
 }
  constructor() { }

  ngOnInit() {
  }

}

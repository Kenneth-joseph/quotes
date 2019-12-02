import { Component, OnInit } from '@angular/core';
import {QuoteC} from '../quote-c';
import { from } from 'rxjs';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {QuoteC} from '../quote-c';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: QuoteC[] = [
    {id: 1 , name: 'kent' , author: 'kent joz', quotes: 'life is great if we make great choices'}
  ];

  addNewQuote(quoteR) {
    let quoteRLength = this.quote.length;
    quoteR.id = quoteRLength + 1;
    this.quote.push(quoteR);
}



  constructor() { }

  ngOnInit() {
  }

}

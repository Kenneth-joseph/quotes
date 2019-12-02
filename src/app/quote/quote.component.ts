import { Component, OnInit } from '@angular/core';
import {QuoteC} from '../quote-c';
import { format } from 'url';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: QuoteC[] = [
    new QuoteC (1 , 'kent' , 'kent joz', 'life is great if we make great choices' , new Date(2012, 2 , 12))
  ];

  addNewQuote(quoteR) {
    const quoteRLength = this.quote.length;
    quoteR.id = quoteRLength + 1;
    this.quote.push(quoteR);

}
 deleteQuote(done, index) {
   if ( done ) {
     const todelete = confirm(`Are you sure you want to delete: ${this.quote[index].name}?`);
     if (todelete) {
       this.quote.splice(index, 1);
     }
   }

 }



  constructor() { }

  ngOnInit() {
  }

}

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
    {id: 1 , name: 'kent' , author: 'kent joz', quotes: 'life is great if we make great choices'}
  ];

  addNewQuote(quoteR) {
    let quoteRLength = this.quote.length;
    quoteR.id = quoteRLength + 1;
    this.quote.push(quoteR);

}
 deleteQuote(done, index){
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

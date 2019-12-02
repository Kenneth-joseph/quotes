import { Component, OnInit } from '@angular/core';
import {QuoteC} from '../quote-c';
import { from } from 'rxjs';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  upvote = 0;
  downvote = 0;

  like() {
    this.upvote ++;
  }

  dislike() {
    this.downvote ++;
  }

  constructor() { }

  ngOnInit() {
  }

}

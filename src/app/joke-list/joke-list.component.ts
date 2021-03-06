import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  constructor() {
      this.jokes = [
          new Joke('What AAA did the cheese say when it looked in the mirror?','Hello-Me (Halloumi)'),
          new Joke('What kind of cheese do you use to disguise a small horse?','Mask-a-pony (Mascarpone)'),
          new Joke('A kid threw a lump of cheddar at me','I thought \'That\'s not very mature.\''),
          // {
          //     setup: 'What did the cheese say when it looked in the mirror?',
          //     punchline: 'Hello-Me (Halloumi)',
          //     hide: true,
          // },
          // {
          //     setup: 'What kind of cheese do you use to disguise a small horse?',
          //     punchline: 'Mask-a-pony (Mascarpone)',
          //     hide: true,
          // },
          // {
          //     setup: 'A kid threw a lump of cheddar at me',
          //     punchline: 'I thought \'That\'s not very mature.\'',
          //     hide: true,
          // },

      ];
  }

  addJoke(joke){
    this.jokes.unshift(joke);
  }

  deleteJoke(joke)
  {
    //Remove the joke instance from the jokes array
    const indexTodelete = this.jokes.indexOf(joke);
    if(indexTodelete !== -1)
    {
      this.jokes.splice(indexTodelete,1)
    }
  }


  ngOnInit() {
  }

}

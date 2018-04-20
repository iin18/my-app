import { Component } from '@angular/core';
import { Joke } from './joke.component';


@Component({
    selector: 'jokelist',
    // template: `
    // <div class="card mb-3" *ngFor="let joke of jokes" style="width: 320px;">
    //     <div class="card-body">
    //         <h4 class="card-title">{{joke.setup}}</h4>
    //         <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
    //         <!--<button class="btn btn-primary" (click)="toggle(joke)" role="button">Tell Me</button>-->
    //         <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell Me1</button>
    //     </div>
    // </div>
    // `

    template: `
    <jokeA *ngFor="let j of jokes" [jokeO]="j"></jokeA>
    `
})


export class JokeListComponent{
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

    // toggle(joke) {
    //     joke.hide = !joke.hide;
    //}
}


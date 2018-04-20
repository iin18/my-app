import { Component, Input } from '@angular/core';

@Component({
    // selector: 'joke',
    // //template: `
    // //    <h1>What did the cheese say when it looked in the mirror? </h1>
    // //    <p>Halloumi (hello me)</p>
    // //`
    // template: `
    //     <h1>{{ setup }}</h1>
    //     <p>{{ punchline }}</p>
    // `

    selector: 'jokeA',
    template: `
    <div class="card mb-3" style="width: 320px;">
        <div class="card-body">
            <h4 class="card-title">{{jokeO.setup}}</h4>
            <p class="card-text" [hidden]="jokeO.hide">{{jokeO.punchline}}</p>
            <!--<button class="btn btn-primary" (click)="toggle(jokeO)" role="button">Tell Me</button>-->
            <button class="btn btn-primary" (click)="jokeO.toggle()" role="button">Tell Me1</button>
        </div>
    </div>
    `
})
export class JokeComponent1{
    @Input() jokeO: Object;
    // setup: string;
    // punchline: string;

    // constructor() {
    //     this.setup = 'what did the cheese say when it looked in the mirror?';
    //     this.punchline= 'Halloumi (Hello Me)';
    // }
}

export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    toggle(joke) {
        this.hide = !this.hide;
    }
}

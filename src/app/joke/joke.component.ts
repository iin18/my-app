import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide=true;
  }

  toggle() {
      this.hide = !this.hide;
  }

}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  //@Input() joke: Object;
  //@Output() jokeDeleted = new EventEmitter();

  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  id: number;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      // console.log(params);
      this.id = params.id;
    });
  }

  // ngOnInit() {
  // }

  deleteJoke()
  {
    this.jokeDeleted.emit(this.joke);
  }

  ngOnChanges()
  {
    console.log(`ngOnChanges - Joke is ${this.joke}`);
  }
  ngOnInit()
  {
    console.log(`ngOnInit - Joke is ${this.joke}`);
  }
  ngDoCheck()
  {
    console.log('ngDoCheck');
  }
  ngAfterContentInit()
  {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentChecked');
  }
  ngAfterAfterViewInit()
  {
    console.log('ngAfterAfterViewInit');
  }
  ngAfterViewChecked()
  {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy()
  {
    console.log('ngOnDestroy');
  }

}



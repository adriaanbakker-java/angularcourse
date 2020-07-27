import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  starWidth = 75;

  constructor() { }

  @Input()  _rating;

  @Output() ratingClicked: EventEmitter<string> =
     new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this._rating * 75 / 5;
  }


  onClick() {
    console.log(`clicked on stars where rating was ${this.rating}`);
    this.ratingClicked.emit(`clicked on stars where rating was ${this.rating}`);
  }
}

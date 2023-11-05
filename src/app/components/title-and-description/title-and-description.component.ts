import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-and-description',
  templateUrl: './title-and-description.component.html',
  styleUrls: ['./title-and-description.component.css']
})
export class TitleAndDescriptionComponent implements OnInit {

  @Input() formsTitle: number[] = [];

  duplicateTitle() {
    this.formsTitle.push();
  }

  removeTitle() {
    this.formsTitle.pop();
  }

  constructor() {}

  ngOnInit(): void {

  }

}

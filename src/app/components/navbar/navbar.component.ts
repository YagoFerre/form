import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() formsQuestion: number[] = [];
  @Input() formsTitle: number[] = [];

  addNewFormQuestion() {
    this.formsQuestion.push(1)
  }

  addNewFormTitle() {
    this.formsTitle.push(1)
  }

  constructor() {}


  ngOnInit(): void {
  }
}

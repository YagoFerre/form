import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formsQuestion: number[] = [];
  formsTitle: number[] = [];

  isTitleVisible: boolean = true;
  isQuestionVisible: boolean = false;

  handleShowNavbarQuestion() {
    this.isQuestionVisible = true;
    this.isTitleVisible = false;
  }

  handleShowNavbarTitle() {
    this.isTitleVisible = true;
    this.isQuestionVisible = false;
  }

  constructor() {}

  ngOnInit(): void {

  }
}

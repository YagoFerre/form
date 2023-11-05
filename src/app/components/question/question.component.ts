import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() formsQuestion: number[] = [];


  duplicateQuestion() {
    this.formsQuestion.push(1);
  }

  removeQuestion() {
    this.formsQuestion.pop();
  }

  constructor() {}

  ngOnInit(): void {

  }
}

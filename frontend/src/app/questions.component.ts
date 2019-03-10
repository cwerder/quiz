import { ApiService } from './api.service';
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})

export class QuestionsComponent {

    private question =  { };

    questions;

    constructor(private api: ApiService) {

    }

    ngOnInit() {
        this.api.getQuestions().subscribe(res => {
            this.questions = res;
        })
    }

    post(question) {
        console.log(question)
        this.api.postQuestion(question);
    }
}
import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    private question =  { };

    constructor(private api:ApiService) {

    }

    ngOnInit() {
        this.api.questionSelected.subscribe(question => {
            this.question = question;
        })
    }
    post(question) {
        console.log(question)
        this.api.postQuestion(question);
    }
}